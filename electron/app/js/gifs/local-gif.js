const path = require('path')
const event = require('js/events/events')

module.exports = function() {

	var local = {}
	
	local.find = function(obj){

		var filePath = path.join(process.cwd(),'app','images', 'local', obj.query.folder, obj.query.files)

		obj.path = filePath

		if(obj.loop){
			event.emit("gif-timer-started", obj)
		} else {
			event.emit("find-gif-duration", obj)
		}

	}

	return local
}