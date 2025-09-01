import {URL} from 'url'
const pzn = new URL("https://www.programmerzamannow.com/belajar?kelas=nodejs")

pzn.host = "www.khaneddy.com"
pzn.searchParams.append('status', 'premium')

console.info(pzn.toString())
console.info(pzn.href)
console.info(pzn.protocol)
console.info(pzn.host)
console.info(pzn.pathname)
console.info(pzn.searchParams)



//================================RESULT=================================================================

// PS C:\Users\Hype G12\OneDrive\Documents\FADIL\CODE\LEARN\MERN STACK\NODE JS\belajar-nodejs-dasar> node "c:\Users\Hype G12\OneDrive\Documents\FADIL\CODE\LEARN\MERN STACK\NODE JS\belajar-nodejs-dasar\url.mjs"
// https://www.khaneddy.com/belajar?kelas=nodejs&status=premium
// https://www.khaneddy.com/belajar?kelas=nodejs&status=premium
// https:
// www.khaneddy.com
// /belajar
// URLSearchParams { 'kelas' => 'nodejs', 'status' => 'premium' }