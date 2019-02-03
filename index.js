const timeout = ms => new Promise(res=>setTimeout(res, ms))

async function a(x) {
  return new Promise(async(resolve, reject) => {
    if (x == 0) {
      reject(x)
    }
    await timeout(3000)
    console.log('doing already',x)
    resolve(x)
  })
}

async function main(x) {
  try {
    const promise = []
    promise.push(a(x))
    promise.push(a(600))
    console.log(promise)
    console.log('bbb')

    const result = await Promise.all(promise)
    console.log('result',result)
  } catch (e) {
    console.log('e = ', e)
  }
}

main(300)