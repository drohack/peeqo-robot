$(document).ready(function(){

	var socket_url = window.socketURL

	var socket = io(socket_url + '/server_webcontrol')

	$("body").on("click","#reset", function(event){
		event.preventDefault();

		socket.emit("reset","yes")
	})

	$("body").on("submit","#remote", function(event){
		event.preventDefault()

		var val = $("#gif-query").val()
		val = val.trim()
		console.log(val)
		socket.emit("remote-gif", val)
	})

	$("body").on("submit","#direct", function(event){
		event.preventDefault()

		var val = $("#gif-url").val()
		val = val.trim()
		console.log(val)
		socket.emit("direct-gif", val)
	})

	$("body").on("submit","#servo", function(event){
		event.preventDefault()

		var val = $("#servo-vals").val()
		val = val.trim()

		val = val.split(',')

		for(i in val){
			val[i] = parseInt(val[i])
		}
		
		if(val.length!=6 || typeof(val)!="object"){
			return
		}
		console.log(val)

		socket.emit("servo-raw", val)
	})


})