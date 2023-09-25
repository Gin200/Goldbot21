let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙅𝙐𝙀𝙂𝘼 𝙈𝙍𝘿𝘼:* ${pesan}`
let teks = `*⺀𝘼𝙉𝙊𝙏𝘼𝙏𝙀 𝙈𝘼𝙉𝘾𝙓 𝘿𝙀 𝙈𝙄𝙀𝙍𝘿𝘼 ⺀*\n\n❏ ${oi}\n\n 𝙈𝘼𝙍𝙍𝙊𝙉𝙀𝙎*\n`
for (let mem of participants) {
teks += `☠️➭  @${mem.id.split('@')[0]}\n`}
teks += `*└@goldarmy_mixto <3`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
