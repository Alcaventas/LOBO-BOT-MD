/*import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'*/
let handler = async (m, { conn, usedPrefix, command}) => {
  

let Reglas = ` ⚠️𝗥𝗘𝗦𝗣𝗘𝗧𝗔 𝗟𝗔𝗦 𝗥𝗘𝗚𝗟𝗔𝗦⚠️\n
1: 𝙽𝙾 𝙻𝙻𝙰𝙼𝙰𝚁 𝙰𝙻 𝙱𝙾𝚃,
2: 𝙽𝙾 𝙷𝙰𝙲𝙴𝚁𝙻𝙴 𝚂𝙿𝙰𝙼 𝙰𝙻 𝙱𝙾𝚃,
3: 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰 𝙰𝙻 𝙾𝚆𝙽𝙴𝚁 𝚂𝙾𝙻𝙾 𝚂𝙸 𝙴𝚂 𝙸𝙼𝙿𝙾𝚁𝚃𝙰𝙽𝚃𝙴,
4: 𝙽𝙾 𝙴𝚂𝙲𝚁𝙸𝙱𝙰𝚂 𝙰𝙻 𝙿𝚁𝙸𝚅𝙰𝙳𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃
5 𝚁𝙴𝚂𝙿𝙴𝚃𝙰 𝙻𝙾𝚂 𝚃𝙴𝚁𝙼𝙸𝙽𝙾𝚂 𝚈 𝙲𝙾𝙽𝙳𝙸𝙲𝙸𝙾𝙽𝙴𝚂.

𝚂𝙸 𝚃𝙴 𝙶𝚄𝚂𝚃𝙰 𝙴𝙻 𝙱𝙾𝚃 , 𝚃𝙰𝙼𝙱𝙸𝙴𝙽 𝙿𝚄𝙴𝙳𝙴𝚂 𝙸𝚁 𝙰𝙻 𝚁𝙴𝙿𝙾𝚂𝙸𝚃𝙾𝚁𝙸𝙾 𝚈 𝙳𝙴𝙹𝙰𝚁 𝚄𝙽𝙰 🌟
${md}
`.trim()
await conn.sendFile(m.chat, imagen1, 'gata.mp4', Reglas)
}
handler.customPrefix = /reglas|Reglas|reglasbot, botreglas|uso, usobot|uso del bot/i
handler.command = new RegExp
handler.register = true
handler.exp = 70
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
