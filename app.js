/*===========================================================
Require
=============================================================*/

const TelegramBot = require('node-telegram-bot-api');
const bot = require('./configs/bot');
const Table = require('as-table');
const { ESPIPE } = require('constants');

const Telegraph = require('telegraph-node');

/*===========================================================
Main Script
=============================================================*/

const ph = new Telegraph();



// Create account
// ph.createAccount('hi', {
// 	short_name: 'Iosif',
// 	author_name: 'Iosif Isachko',
// 	author_url: 'https://t.me/I0S1F'
// })
// 	.then(res => {
// 		console.log(res);
// 	});

// Edit account
// ph.editAccountInfo(token, {
// 	short_name: 'Iosif',
// 	author_name: 'Iosif Isachko',
// 	author_url: 'https://t.me/I0S1F'
// })
// 	.then(res => {
// 		console.log(res);
// 	});

// get Info
// ph.getAccountInfo(token)
// 	.then(res => {
// 		console.log(res);
// 	});

// revoke access token  (перевыпуск токена)
// create page
// ph.createPage(token, 'Test Iosif 2', [{ tag: 'h2', children: ['Hello world!'] }], {
// 	return_content: true,
// 	author_name: 'Iosif Isachko',
// 	author_url: 'https://t.me/I0S1F',
// }).then((result) => {
// 	console.log(result)
// })





/*
const token = '4518c29514ebf2874b7887d28f167989834b25cf3b3576fe4997b7bc45b0';
const path = 'Test-Iosif-2-12-07';
const title = 'Test Iosif 2';
const content = [
	{ tag: 'h2', children: ['Hello IOSIF up gooo!'] },
	{ tag: 'br' },
	{ tag: 'img', attrs: {
		src: 'https://bipbap.ru/wp-content/uploads/2017/08/0-70.jpg' }
	}
];
const options = {
	return_content: true,
	author_name: 'Iosif Isachkooo',
	author_url: 'https://t.me/I0S1F',
};


ph.editPage(token, path, title, content, options)
	.then((resulr) => { console.log(result); });


*/




// autoStart - отвечает ли бот на команды, которые он получил в состоянии "отключен"
// timeout - таймаут между запросами
/*
polling: {
	interval: 300,
	autoStart: false,
	params: {
		timeout: 10
	}
}
*/
const estiemic = new TelegramBot(bot.TOKEN, {
	polling: true,
});

/*
const timer = setInterval(() => {
	const date = new Date().getMinutes();
	if (date == 1) {
		estiemic.sendMessage(332904004, 'УРА!!!');
		clearInterval(timer);
	}
}, 60000);
*/

// estiemic.on('message', mes => {
// 	let count = 0;
// 	const timer = setInterval((t = mes) => {
// 		if(count === 20) { clearInterval(timer); }
// 		estiemic.sendMessage(t.chat.id, `Я машина ЭЭЭЭ`);
// 		console.log(count);
// 		count++;
// 	}, 1000);
// });

let count = 0;
const timer = setInterval(() => {
	if (count === 20) { clearInterval(timer); }
	estiemic.sendMessage(332904004, `Я машина ЭЭЭЭ`);
	console.log(count);
	count++;
}, 1000);


// estiemic.on('message', mes => {
// 	console.log(mes);
// 	estiemic.sendMessage(mes.chat.id, `Hi, ${mes.from.first_name}!`);
// });

const tableConfig = {
	delimiter: '  ▏ ',
	dash: '⎯',
	right: true,
};

const commands = {
	start: 'начать путешествие',
	help: 'возможности бота',
	admin: 'активировать спец. возможности',
	login: 'аутентификация',
};

// console.table(Table.configure(tableConfig)({commands, commands}));

function cmdText(cmd)
{
	let content = 'ESTIEMIC Commands:\n';
	for(const [key, value] of Object.entries(cmd)) {
		content += `/${key} - ${value}\n`;
	}
	return content;
}

// estiemic.onText(/\/login (.+)/, (mes, arr) => {
// 	estiemic.sendMessage(mes.chat.id, cmdText(commands));
// 	console.log(mes);
// 	console.log(arr);
// });

/*
estiemic.on('message', mes => {

	if(mes.text === 'html') {
		estiemic.sendMessage(mes.chat.id, `<b>Hello</b><pre>${cmdText(commands)}</pre><code>const a = 2;</code>`, {
			parse_mode: 'HTML',
		});
	}

	if(mes.text === 'link') {
		estiemic.sendMessage(mes.chat.id, `https://www.youtube.com/watch?v=sCE9CpJLpo8&list=PLhgRAQ8BwWFaxlkNNtO0NDPmaVO9txRg8&index=12`, {
			disable_web_page_preview: true, // true - убирает превью ссылок
			disable_notification: true, // true - убирает звуковое и текстовое оповещение 
		});
	}

	// Клавиатура

	if (mes.text === 'Закрыть') {
		estiemic.sendMessage(mes.chat.id, "закрываю", {
			reply_markup: { // клавиатура
				remove_keyboard: true, // удалить клавиатуру
			}
		});
	} else if (mes.text === 'Ответить') {
		estiemic.sendMessage(mes.chat.id, "отвечаю", {
			reply_markup: {
				force_reply: true, // ответить на последнее сообщение бота 
			}
		});
	} else {
		estiemic.sendMessage(mes.chat.id, 'Клавиатура', {
			reply_markup: {
				keyboard: [ // кнопки
					[{
						text: 'Отправить место нахождение', // название
						request_location: true // предназначение - 
					}],
					['Ответить', 'Закрыть'],
					[{
						text: 'Отправить контакт',
						request_contact: true,
					}]
				],
				// one_time_keyboard: true,
			}
		});
	}
});
*/

// Инлайн клавиатура
// estiemic.on('message', mes => {
// 	const {id} = mes.chat;

// 	estiemic.sendMessage(id, 'Inline keyboard', {
// 		reply_markup: {
// 			inline_keyboard: [
// 				[
// 					{
// 						text: "link",
// 						url: 'https://google.com'
// 					}
// 				],
// 				[
// 					{
// 						text: "Reply",
// 						callback_data: 'reply'
// 					},
// 					{
// 						text: "Forward",
// 						callback_data: 'forward'
// 					}
// 				]
// 			]
// 		}
// 	});
// });

// Быстрое уведомление для пользователя
// estiemic.on('callback_query', query => {
// 	estiemic.answerCallbackQuery(query.id, `${query.data}`);
// });

//
// estiemic.on('inline_query', query => {
// 	const res = []; // video, music, article
// 	for(let i = 0; i < 5; i++)
// 	{
// 		res.push({
// 			type: 'article',
// 			id: i.toString(),
// 			title: `Title # ${i+1}`,
// 			input_message_content: {
// 				message_text: `${cmdText(commands)}`
// 			}
// 		});
// 	}

// 	estiemic.answerInlineQuery(query.id, res, {
// 		cache_time: 0
// 	});

// });

// Шаблон inline_keyboard
/*
const inline_keyboard = [
	[
		{
			text: 'Forward',
			callback_data: 'forward'
		},
		{
			text: 'Reply',
			callback_data: 'reply'
		}
	],
	[
		{
			text: 'Edit',
			callback_data: 'edit'
		},
		{
			text: 'Delete',
			callback_data: 'delete'
		}
	]
];

estiemic.on('callback_query', query => {
	const { chat, message_id, text } = query.message;
	console.log(query.data, message_id)
	switch (query.data) {
		case 'forward':
			// откуда. куда. что
			estiemic.forwardMessage(chat.id, chat.id, message_id);
			break;
		case 'reply':
			estiemic.sendMessage(chat.id, 'Send', {
				reply_to_message_id: message_id
			});
			break;
		case 'edit':
			estiemic.editMessageText(`${text} (edited)`, {
				chat_id: chat.id,
				message_id: message_id,
				reply_markup: { inline_keyboard }
			});
			break;
		case 'delete':
			estiemic.deleteMessage(chat.id, message_id);
			break;
	}

	estiemic.answerCallbackQuery(query.id, {
		callback_query_id: query.id
	});
});

estiemic.onText(/\/login/, (mes, [source, match]) => {
	const { id } = mes.chat;
	estiemic.sendMessage(id, 'Keyboard', {
		reply_markup: {
			inline_keyboard
		}
	});
});

*/

// estiemic.on('message', mes => {
// 	setTimeout((t = mes) => {
// 		estiemic.deleteMessage(t.chat.id, t.message_id);
// 	}, 5000);
// });

// send img
/*
const fs = require('fs');
estiemic.onText(/\/img/, mes => {
	estiemic.sendPhoto(mes.chat.id, fs.readFileSync(`${__dirname}\\img\\estimic.jpg`), {
		caption: 'This is estiemic.'
	});
});

estiemic.onText(/\/jpeg/, mes => {
	estiemic.sendPhoto(mes.chat.id, `${__dirname}\\img\\estimic.jpg`);
});

estiemic.onText(/\/mp3/, mes => {
	estiemic.sendMessage(mes.chat.id, 'Start audio uploading ...');

	fs.readFile(`${__dirname}\\mp3\\audio.mp3`, (err, data) => {
		if(err) { console.log(err); }
		estiemic.sendAudio(mes.chat.id, data)
			.then(() => {
				estiemic.sendMessage(mes.chat.id, 'Uploading finish');
			})
	});

	// estiemic.sendAudio(mes.chat.id, `${__dirname}\\mp3\\audio.mp3`);
});
estiemic.onText(/\/video/, mes => {
	estiemic.sendMessage(mes.chat.id, 'sending...');
	estiemic.sendVideo(mes.chat.id, 'techslides.com/demos/sample-videos/small.mp4');
});

estiemic.onText(/\/local/, mes => {
	estiemic.sendLocation(mes.chat.id, 59.928831, 30.360586);
});

estiemic.onText(/\/contact/, mes => {
	estiemic.sendContact(mes.chat.id, '+380931264600', 'Iosif');
});
*/



// Создавать и оплачивать товары



// estiemic.onText(/\/l:(.+)/, (mes, [source, match]) => {
// 	const { id } = mes.chat;
// 	estiemic.sendMessage(id, match);
// });