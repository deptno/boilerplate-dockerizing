import debug from 'debug'

const error = debug('query:error')
const warn = debug('query:warn')
const trace = debug('query:trace')

export const createQuery = (pool) => {
  const replace = (sql, args) => {
    return sql
      .replace(/(\$\d+)/g, (_, a) => {
        const arg = args[Number(a.slice(1)) - 1];
        if (typeof arg === 'string') {
          return `'${arg}'`;
        }
        return arg;
      })
      .replace(/^\s*(?:\r\n?|\n)/gm, '');
  };
  const handleResponseError = (sql, args) => (e) => {
    // https://www.postgresql.org/docs/9.2/errcodes-appendix.html
    if (e.code === '23505') {
      warn('SQL ERROR: DUPE (23505)');
    } else {
      const logArgs = args !== null && args !== void 0 ? args : [];
      error('SQL ERROR: %s\nARGS(%d): %j\nRESPONSE MESSAGE: %s', sql, logArgs.length, logArgs, e);
    }

    if (e.fatal) {
      throw e;
    }

    return [];
  };
  return async function query(sql, args, log = trace) {
    log('SQL CALL: %s', sql.split('\n')[0]);

    return pool
      .query(sql, args)
      .then(response => {
        log('SQL RESULT(%d): %s', response.rowCount, replace(sql, args));
        return response.rows;
      })
      .catch(handleResponseError(sql, args));
  };
};