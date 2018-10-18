async function tryPromise(fn, nRetriesRemaining, currentRetry = 0) {

  let res
  try {
    await timeout(currentRetry * currentRetry * 1000)
    res = await fn()
  } catch (err) {
    if (nRetriesRemaining >= 1) {
      console.log(err)
      console.log('retries remaining: ', nRetriesRemaining)
      res = await tryPromise(fn, --nRetriesRemaining, ++currentRetry)
    } else {
      throw err
    }
  }

  return res

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

module.exports = tryPromise