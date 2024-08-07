const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'menucrps',
        categorie: 'Mainmenu'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/9df3bb1999c29a8b8885e.jpg';
            const msg = `░░░░░░░░░░░░░░░░░░
══════════════════
.         *| CRPS • MENU |*
══════════════════
Bienvenue dans le menu principal tout voir et savoir sur les activités CRPS.

◩ Guide
◩ Competition
◩ Succes
◩ Devise
◩ Reward
◩ Jobs
◩ Générale
◩ Nexus Ligue
◩ Menu Player
◩ Id rôliste

░░░░░░░░░░░░░░░░░░
══════════════════
          『 🪀 𝗖𝗥𝗣𝗦 𝗧𝗘𝗔𝗠 🪀 』`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
  
        }
    }
);

zokou(
    {
        nomCom: 'guide',
        categorie: 'Mainmenu'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/40a0f83c18f8c80a47237.jpg';
            const msg = `.      『 🪀 𝗡𝗘𝗪 𝗛𝗢𝗥𝗜𝗭𝗢𝗡 🎮 』`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
  
        }
    }
);


zokou(
    {
        nomCom: 'competition',
        categorie: 'Mainmenu'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/baa8f6b353fabebab64bb.jpg';
            const msg = `.     『 🪀🎮 𝗖𝗥𝗣𝗦 𝗧𝗢𝗣 🏆🔝 』`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
  
        }
    }
);


zokou(
    {
        nomCom: 'succes',
        categorie: 'Mainmenu'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/d21bd96bb0dbb69058480.jpg';
            const msg = `░░░░░░░░░░░░░░░░░░░
═══════════════════
.         *| 𝗚𝗔𝗠𝗜𝗡𝗚 𝗦𝗨𝗖𝗖𝗘𝗦 |*
═══════════════════
*🔥 𝗪𝗶𝘀𝗵 :* Réaliser une série de combat officiel (5/J) pour débloquer ce succès.

> 𝐍𝐢𝐯 1: 100🔰 : Série de (1 Jour)
> 𝐍𝐢𝐯 2: 200🔰 : Série de (2 Jours)
> 𝐍𝐢𝐯 3: 300🔰 : Série de (3 Jours)
> 𝐍𝐢𝐯 4: 400🔰 : Série de (4 Jours)
> 𝐍𝐢𝐯 5: 500🔰 : Série de (5 Jours)

*🧘‍♂️ 𝗦𝗮𝗴𝗲 :* Accumule un maximum de points en 𝗡𝗘𝗫𝗨𝗦 𝗟𝗜𝗚𝗨𝗘 pour débloquer ce succès.

> 𝐍𝐢𝐯 1: 05🧠 : 100pts Accumulé.
> 𝐍𝐢𝐯 2: 10🧠 : 200pts Accumulé.
> 𝐍𝐢𝐯 3: 15🧠 : 300pts Accumulé.
> 𝐍𝐢𝐯 4: 20🧠 : 400pts Accumulé.
> 𝐍𝐢𝐯 5: 25🧠 : 500pts Accumulé.

*🏆 𝗖𝗵𝗮𝗺𝗽𝗶𝗼𝗻 :* Passe en division supérieur pour débloquer ce succès.

> 𝐍𝐢𝐯 1: 100🔰 : Division Argent🥈
> 𝐍𝐢𝐯 2: 200🔰 : Division Or🥇
> 𝐍𝐢𝐯 3: 300🔰 : Division Émeraude❇️
> 𝐍𝐢𝐯 4: 400🔰 : Division Diamant💎
> 𝐍𝐢𝐯 5: 500🔰 : All divisions.

*😎 𝗦𝗽𝗲𝗰𝗶𝗮𝗹𝗶𝘀𝘁𝗲 :* Obtient des médailles de division pour débloquer ce succès.

> 𝐍𝐢𝐯 1: 15♦️ : 3 Stars⭐
> 𝐍𝐢𝐯 2: 30♦️ : 5 Stars⭐
> 𝐍𝐢𝐯 3: 30♦️ : 3 Startup🌟
> 𝐍𝐢𝐯 4: 60♦️ : 5 Startup🌟
> 𝐍𝐢𝐯 5: 50♦️ : 1 Shooting Star💫

*🏅 𝗠𝗮𝗶𝘁𝗿𝗲 :* Domine l'arène de combat, enchaîne une série de victoire pour débloquer ce succès.

> 𝐍𝐢𝐯 1: 1🎁🙂 : 05 victoires
> 𝐍𝐢𝐯 2: 1🎁🥉 : 10 victoires
> 𝐍𝐢𝐯 3: 1🎁🥈 : 15 victoires
> 𝐍𝐢𝐯 4: 1🎁🥇 : 20 victoires
> 𝐍𝐢𝐯 5: 1🎁🏅 : 30 victoires

*👺 𝗗𝗶𝗰𝘁𝗮𝘁𝗲𝘂𝗿 :* Fini premier au classement de la 𝗡𝗘𝗫𝗨𝗦 𝗟𝗜𝗚𝗨𝗘 pour débloquer ce succès.

> 𝐍𝐢𝐯 1: 10k🧭 : Division Bronze🥉
> 𝐍𝐢𝐯 2: 20k🧭 : Division Argent🥈
> 𝐍𝐢𝐯 3: 30k🧭 : Division Or🥇
> 𝐍𝐢𝐯 4: 40k🧭 : Division Émeraude❇️
> 𝐍𝐢𝐯 5: 50k🧭 : Division Diamant💎

*🧠 𝗠𝗮𝗶𝘁𝗿𝗶𝘀𝗲 :* Accumule un maximum de *QI🧠* pour débloquer ce succès.

> 𝐍𝐢𝐯 1: 05♦️ : Accumule 10🧠
> 𝐍𝐢𝐯 2: 10♦️ : Accumule 20🧠
> 𝐍𝐢𝐯 3: 15♦️ : Accumule 30🧠
> 𝐍𝐢𝐯 4: 20♦️ : Accumule 40🧠
> 𝐍𝐢𝐯 5: 25♦️ : Accumule 50🧠

*🌐 𝗔𝗱𝘃𝗲𝗻𝘁𝘂𝗿𝗲𝗿 :* Réalise une série de tours (6/J) dans une story mode pour débloquer ce succès.

> 𝐍𝐢𝐯 1: 1k🧭 : Série de (1 Jour)
> 𝐍𝐢𝐯 2: 2k🧭 : Série de (2 Jours)
> 𝐍𝐢𝐯 3: 3k🧭 : Série de (3 Jours)
> 𝐍𝐢𝐯 4: 4k🧭 : Série de (4 Jours)
> 𝐍𝐢𝐯 5: 5k🧭 : Série de (5 Jours)

*🤼‍♂️ 𝗪𝗲𝗲𝗸𝗲𝗻𝗱 𝗖𝗵𝗮𝗹𝗹𝗲𝗻𝗴𝗲 :* Débloque d'autres succès en week-end pour débloquer ce succès.

> 𝐍𝐢𝐯 1: 0.5k💎 : 1 succès
> 𝐍𝐢𝐯 2: 1.0k💎 : 2 succès
> 𝐍𝐢𝐯 3: 1.5k💎 : 3 succès
> 𝐍𝐢𝐯 4: 2.0k💎 : 4 succès
> 𝐍𝐢𝐯 5: 2.5k💎 : 5 succès

*✨ 𝗟𝗲𝗴𝗲𝗻𝗱 :* Débloque toutes les médailles de succès pour débloquer ce succès.

> 𝐍𝐢𝐯 1 : 1.000♦️ : 😎 Professionnel : Médailles Star⭐
> 𝐍𝐢𝐯 2: 2.000♦️ : 🕵️‍♂️ Spécialiste : Médailles Startup🌟
> 𝐍𝐢𝐯 3: 3.000♦️ : 🦦 Retraité : Médailles Shooting star💫

> ⚠️ 𝗪𝗔𝗥𝗡𝗜𝗡𝗚 : Lorsque vous débloquer toute les médailles d'un succès celle-ci passe au niveau supérieur (⭐->🌟->💫).

░░░░░░░░░░░░░░░░░░░
        『 🪀🎮 𝗖𝗥𝗣𝗦 𝗧𝗢𝗣 🏆🔝 』`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
  
        }
    }
);


zokou(
    {
        nomCom: 'devise',
        categorie: 'Mainmenu'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/9f760a4812218c40851a7.jpg';
            const msg = `.    『 💱 𝗖𝗥𝗣𝗦 𝗧𝗛𝗘 𝗕𝗘𝗦𝗧💰 』`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
  
        }
    }
);


zokou(
    {
        nomCom: 'reward',
        categorie: 'Mainmenu'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/1eb956106c5773e1a317c.jpg';
            const msg = `.    『 🏆 𝗖𝗥𝗣𝗦 𝗡𝗢 𝗟𝗜𝗠𝗜𝗧 🎊 』`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
  
        }
    }
);

zokou(
    {
        nomCom: 'jobs',
        categorie: 'Mainmenu'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/976a4f6802ec915a53ef9.jpg';
            const msg = `.   『 🎮 𝗣𝗟𝗔𝗬 𝗡𝗢 𝗟𝗜𝗠𝗜𝗧 🔝 』`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'generale',
        categorie: 'Mainmenu'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/3d7891f9c9f9c4cfc5440.jpg';
            const msg = `.  『 🪀 𝗖𝗥𝗣𝗦 𝗡𝗘𝗪 𝗛𝗢𝗥𝗜𝗭𝗢𝗡 📇 』`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
  
        }
    }
);

zokou(
    {
        nomCom: 'menuplayer',
        categorie: 'DRPS'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/56b1d88e0e35b86047cce.jpg';
            const msg = `░░░░░░░░░░░░░░░░░░░
═══════════════════
          *[ MENU PLAYER ]*
═══════════════════

01. Ripatlas [+225 54126927]
02. Manjiro [+224 6 2245 6205]
03. Draken [+224 6 2060 4101]
04. Samuel [+225 89633611]
05. Tenno [+225 45697604]
06. Queen [+243 976 594 355]
07. Viviane [+243 976 594 355]
08. Tempest [+243 810 602 780]
09. Yû [+229 54583352]
10. Rayan [+241 07 32 19 67]
11. Yuta [+242 06 911 7728]
12. Tomura [+224 611 61 25 22]
13. Lust [+237 6 93 23 72 46]
14. Wei [+243 970 490 637]
15. Lonetatlas [+225 47835403]
16. Ruy3 [+237 6 55 27 37 82]
17. Sept [+224 626 67 50 38]
18. Dazai [+229 47876426]
19. Angel [+33 7 45 56 15 48]
20. Eoza [+226 63 68 54 68]

═══════════════════
░░░░░░░░░░░░░░░░░░░`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'roliste',
        categorie: 'DRPS'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/cfbcd462eda8a42c8c28c.jpg';
            const msg = `░░░░░░░░░░░░░░░░░░░
═══════════════════
.            *| 𝐂𝐑𝐏𝐒 𝐑𝐎𝐋𝐈𝐒𝐓𝐄 |*
═══════════════════

> *👤 𝗜𝗗 :*
> *♨️ 𝗗𝗶𝘃𝗶𝘀𝗶𝗼𝗻 :* Bronze🥉
> *⚜️ 𝗦𝘁𝗮𝘁𝘂𝘁 :* Rôliste✅

░░░░░░░░░░░░░░░░░░░
> *🔥 𝗪𝗶𝘀𝗵 :* 00C/01J
> *🧘‍♂️ 𝗦𝗮𝗴𝗲 :* 000/100pts
> *🏆 𝗖𝗵𝗮𝗺𝗽𝗶𝗼𝗻 :* D. Argent🥈
> *😎 𝗦𝗽𝗲𝗰𝗶𝗮𝗹𝗶𝘀𝘁𝗲 :* 0/3⭐
> *🏅 𝗠𝗮𝗶𝘁𝗿𝗲 :* 00/05V
> *👺 𝗗𝗶𝗰𝘁𝗮𝘁𝗲𝘂𝗿 :* .../1er🥉
> *🧠 𝗠𝗮𝗶𝘁𝗿𝗶𝘀𝗲 :* 00/10🧠
> *🤠 𝗔𝗱𝘃𝗲𝗻𝘁𝘂𝗿𝗲𝗿 :* 00T/01J
> *🤼‍♂️ 𝗖𝗵𝗮𝗹𝗹𝗲𝗻𝗴𝗲 :* 00/01✅
> *💯 𝗟𝗲𝗴𝗲𝗻𝗱 :* 0⭐/0🌟/0💫
░░░░░░░░░░░░░░░░░░░
> *👊 𝗙𝗶𝗴𝗵𝘁 :* 𝗩 : 000 𝗗 : 000
> *🏅 𝗧𝗢𝗣 3 :* 000
> *🎭 𝗦𝘁𝗼𝗿𝘆 𝗠𝗼𝗱𝗲 :* 000
> *🧠 𝗠𝗮𝗶𝘁𝗿𝗶𝘀𝗲 :* 000
░░░░░░░░░░░░░░░░░░░
*👤 𝗣𝗲𝗿𝘀𝗼 :*
*🀄 𝗖𝗮𝗿𝗱 :* 
*🎚️ 𝗡𝗶𝘃𝗲𝗮𝘂 :* 01
*🔰 𝗫𝗽 :* 000 / 500
*🎒 𝗜𝘁𝗲𝗺𝘀 :* (voir magasin)
░░░░░░░░░░░░░░░░░░░
*💳𝗣𝗿𝗲𝗺𝘂𝗶𝗺 :* 000💳
*🧭$ ₱𝗶𝗲𝗰𝗲𝘀 :* 10.000🧭
*💎$ £𝗶𝗮𝗺𝗼𝗻𝗱 :* 1.000💎
*♦️$ 𝐓𝗼𝗸𝗲𝗻 :* 000♦️
═══════════════════
░░░░░░░░░░░░░░░░░░░
     『 🪀🎮 𝗖𝗥𝗣𝗦 𝗡𝗢 𝗟𝗜𝗠𝗜𝗧 🏆🔝 』`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
  
        }
    }
);

zokou(
    {
        nomCom: 'fight',
        categorie: 'Arena'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            // const lien = 'https://telegra.ph/file/1aea5a846d5bcb1670914.jpg';
            const msg = `.  🎮 𝗣𝗔𝗩𝗘 𝗗𝗘 𝗖𝗢𝗠𝗕𝗔𝗧 🎮
░░░░░░░░░░░░░░░░░░░
═══════════════════
>> *[Player Name]*

> 

> 

> 

> 

*💠 𝐏𝐨𝐮𝐯𝐨𝐢𝐫 :*
*📌 𝐃𝐢𝐬𝐭𝐚𝐧𝐜𝐞 :*
░░░░░░░░░░░░░░░░░░░
  ❤️ : 100  🌀 : 050  🫀 : ???
░░░░░░░░░░░░░░░░░░░
═══════════════════
        『 🎮 𝗣𝗟𝗔𝗬 𝗡𝗢 𝗟𝗜𝗠𝗜𝗧 🔝 』`;
           // zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   repondre(msg);
        }
    }
);


zokou(
    {
        nomCom: 'rule',
        categorie: 'Arena'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            // const lien = 'https://telegra.ph/file/1aea5a846d5bcb1670914.jpg';
            const msg = `░░░░░░░░░░░░░░░░░░░
═══════════════════
  🌐 𝐒𝐔𝐏𝐑𝐄𝐌𝐔𝐒 𝐕𝐄𝐑𝐒𝐄 🌐
            🎮 𝐁𝐲 𝐂𝐑𝐏𝐒 🎮
═══════════════════
*👤 Player 1 or Team 1 👥*
 - 
                   *𝙑𝙎*

*👥 Player 2 or Team 2 👥*
 - 
░░░░░░░░░░░░░░░░░░░
*🚫 Règles d'Affrontement :*
*▪ WTF :* Mc
*▪ Latence :* 
*▪ Items :*
░░░░░░░░░░░░░░░░░░░
*♨️ Turner :*
*⚖️ Arbitre :*
*⌚ Heure :*
*🌦️ Météo :*
*🌍 Zone :*
*📌 Distance initial :* 5m
*⭕ Statistiques :* 50m
*⏱️ Latence :* 6 + 2min add
░░░░░░░░░░░░░░░░░░░
*🌍 Environnement :* (voir image)

░░░░░░░░░░░░░░░░░░░
═══════════════════
*La maîtrise "🧠" initial est de 6.*
> *❌Média Descriptif :* -1🧠
> *❌Pavé Fluide :* -1🧠
> *❌Pavé Lassant :* -2🧠
> *❌Stats Incorrect :* -1🧠
═══════════════════
> *🥇Easy Win: 3:* Domination.
> *🥈Medium Win: 2:* def +25%🫀
> *🥉Hard Win: 1:* def +50%🫀 & -85%❤️
> *🏅Perfect Win: 4:* Stats no variation.
═══════════════════
> *⚠️ Si vous achevé l'adversaire d'un seul coup c'est un "ONE SHOT" +2🧠, si vous l'achevé en full power c'est "RAMPAGE" +2🧠 et si vous gagné contre un perso de niveau supérieur c'est "MONSTER SLAYER" +4🧠.*
═══════════════════
> *Vous avez 6️⃣ tours max pour achever votre adversaire ou décision de victoire par domination.*
═══════════════════
░░░░░░░░░░░░░░░░░░░
       『 🎮 𝗣𝗟𝗔𝗬 𝗡𝗢 𝗟𝗜𝗠𝗜𝗧 🔝 』`;
           // zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   repondre(msg);
        }
    }
);

zokou(
    {
        nomCom: 'annonce',
        categorie: 'Arena'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/1aea5a846d5bcb1670914.jpg';
            const msg = `░░░░░░░░░░░░░░░░░░░
═══════════════════
      *🗞️ CRPS ANNONCE 🗞️*
═══════════════════
*🎤Journaliste :* 


═══════════════════
   *🧮 STATS OF MATCH 🧮* 
═══════════════════
*👤PlayerOrTeam :* 
*> 🧠 Maîtrise:* 
*> 💯 Score:* 
*> 💢 Difficult:* 
*> 🎤 Comment:* 

*👤PlayerOrTeam :* 
*> 🧠 Maîtrise:* 
*> 💯 Score:* 
*> 💢 Difficult:* 
*> 🎤 Comment:* 
═══════════════════
*🌐 ARÈNE :* 
*🛂 ARBITRE :* 

✒️ *𝙎𝙞𝙜𝙣𝙖𝙩𝙪𝙧𝙚 :* [ ✓ ]
═══════════════════
*⚠️ Notice : Veuillez supprimer les contenus ne correspondent pas à l'annonce ainsi que cette notice.*
═══════════════════
░░░░░░░░░░░░░░░░░░░
          『 ‼️𝗔𝗡𝗡𝗢𝗨𝗡𝗖𝗘𝗠𝗘𝗡𝗧‼️ 』`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'transact',
        categorie: 'Transact-Zone'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            // const lien = 'https://telegra.ph/file/1aea5a846d5bcb1670914.jpg';
            const msg = `░░░░░░░░░░░░░░░░░░░
═══════════════════
|🏦💰𝐂𝐑𝐏𝐒 𝐓𝐫𝐚𝐧𝐬𝐚𝐜𝐭🛒🛍️|
═══════════════════

> *👤 ID Rôliste:*
> *💳 Solde Initial :*
> *📇 Transaction :*
> *💰 Dépenses :*
> *💳 Économie :*

*✒️ 𝙎𝙞𝙜𝙣𝙖𝙩𝙪𝙧𝙚 :* [ ✓ ]
═══════════════════
░░░░░░░░░░░░░░░░░░░
                 『 🎊 𝗘𝗡𝗝𝗢𝗬 🥳 』`;
           // zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   repondre(msg);
        }
    }
);

zokou(
    {
        nomCom: 'system',
        categorie: 'Mainmenu'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0) {
            const liens = [
                'https://telegra.ph/file/a9f034ef06093c9545045.jpg',
                'https://telegra.ph/file/fb7243fef8625f4fcde14.jpg',
                'https://telegra.ph/file/973421ff9a15842ededf5.jpg'
            ];

            for (const lien of liens) {
                await zk.sendMessage(dest, { image: { url: lien } }, { quoted: ms });
            }
        }
    }
);
