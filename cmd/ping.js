module.exports = {
    name: 'пинг',
    desription: 'Эта команда пишет в ответ на запрос Понг!',
    execute(message, args) {
        message.channel.send('Понг!');
    }
}