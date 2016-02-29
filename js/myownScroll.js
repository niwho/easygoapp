var MyOwnScroll = Vue.extend({
	template: '<div id="wrapper"><div id="scroller"i style="overflow-y: scroll; OVERFLOW-X:hidden;">\
        <ul >\
        	<template v-for="item in items">\
            <li><div class="container-fluid" style="height:60px" >\
            <div class="row" style="margin:0px -35px ">\
            <div class="col-sm-3 col-xs-3"><img :src="item.cover" width="60px" height="59px" style=""/></div>\
            <div class="col-sm-9 col-xs-9" style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;width:18em;">\
            <div class="row"><h5 v-on:click="godetail($index)"><b><a>{{item.title}}</a></b></h5></div>\
            <div class="row"><span >{{item.indro}}</span></div>\
            </div>\
            </div>\
            </div></li>\
            </template>\
        </ul>\
    </div>\
</div> ',
	route: {
		activate: function(transition) {
			//console.log('hook-example activated!')
				//this.loaded()
			transition.next()
		},
		deactivate: function(transition) {
			////console.log('hook-example deactivated!')
				//this.myScroll.destroy()
				//this.myScroll = null
			transition.next()
		}
	},
	methods: {
		godetail: function(idx) {
			//this.$route.router.app.show = true
			this.$route.router.go({
				name: 'detail',
				params: {
					telsequence: idx
				}
			})
		},

		loaded: function() {
			that = this; //闭包使用
			this.myScroll = new IScroll('#wrapper', {
				mouseWheel: true,
				tap: true,
			});
			document.addEventListener('touchmove', function(e) {
				e.preventDefault();
			}, false);
			this.myScroll.on('scrollEnd', function() {
				//console.log(this.y + ' ' + this.maxScrollY)

				if (this.y == 0) {
					//console.log('刷新数据')
					//console.log(that.data_tel_url)
					$.get(that.data_tel_url, {
							'mail': 'xxx@xxx.xxx'
						},
						function(data) {
							//console.log('!!!!!!!!!!!!!!!!!!!!!!!!')
							//console.log(that)
							//console.log(data)
							//console.log('!!!!!!!!!!!!!!!!!!!!!!!!')
							that.more = data.more
							that.sinceid = data.sinceid
								//test
							that.items = data.data
							that.$route.router.app.app_global.dat1 = that.items
							Vue.nextTick(function() {
								// DOM 更新了
								//console.log('nexttirck000')
								that.needfix = true
								that.fixHeight()
								that.myScroll.refresh()
							})
						},
						'json'
					).error(function() {
						alert('request errrrr')
					})

				} else if (this.y == this.maxScrollY) {
					// do something
					//that.itmes = [] //ajax刷新
					//console.log('加载更多数据')
					//console.log(that)
					//console.log(that.more + ' ' + that.sinceid)
					if (!that.more)
						return
					$.get(that.data_tel_url, {
							'sinceid': that.sinceid
						},
						function(data) {
							//console.log(that)
							//console.log(data)
							that.more = data.more
							that.sinceid = data.sinceid
							for (var i = 0; i < data.data.length; ++i) {
								// console.log(data.data[i])
								that.items.push(data.data[i])
								that.$route.router.app.app_global.dat1 = that.items
							}
							Vue.nextTick(function() {
								// DOM 更新了
								// console.log('nexttirck')
								that.fixHeight()
								that.myScroll.refresh()
							})
						},
						'json'
					).error(function() {
						alert('request errrrr')
					})
				}
			})
		},
		initOriginData: function() {
			that = this
			//console.log('initOriginData' + this.items.length + " " + this.needfix)
			if (this.items.length != 0)
				return
			$.get(this.data_tel_url, {
					'initOriginData': 'initOriginData'
				},
				function(data) {
					//test
					that.items = data.data
					that.$route.router.app.app_global.dat1 = that.items
					that.more = data.more
					that.sinceid = data.sinceid

				},
				'json'
			).error(function() {
				alert('request errrrr')
			})
		},

	},
	ready: function() {
		//this.$route.router.app.app_global={}
		this.$route.router.app.app_global.dat1 = this.items
		this.data_tel_url = 'http://121.42.179.62/meiju/get_televison/'
		this.data_epi_url = 'http://121.42.179.62/meiju/get_episode/'
		this.more = true
		this.sinceid = 0
		this.currentid = -1 //防止重复请求
		main = document.getElementById('scroller')
		//console.log('###############################################')
		//console.log(main.scrollHeight)
		//console.log(main.offsetWidth)
		//console.log($(window).height())
		main.style.width = main.offsetWidth + 'px'
		main.style.height = $(window).height() - 50 + 'px'
		//console.log('###############################################')

		//获取数据
		//if (this.tel.contens &&this.tel.contens.length == 0)
		//    this.get_data(1)
		that = this
		var nDivHight = $("#scroller").height();
		$('#scroller').scroll(function() {
			//$(document).scrollTop() 获取垂直滚动的距离
			//$(document).scrollLeft() 这是获取水平滚动条的距离
			//console.log('scroll'+' '+$(this)[0].scrollTop+ ' ' + nDivHight)
			nScrollHight = $(this)[0].scrollHeight;
			nScrollTop = $(this)[0].scrollTop;

			if (nScrollTop + nDivHight >= nScrollHight) {
				if (!that.more && that.sinceid != that.currentid)
					return
				that.currentid = that.sinceid
				$.get(that.data_tel_url, {
						'sinceid': that.sinceid
					},
					function(data) {
						//console.log(that)
						//console.log(data)
						that.more = data.more

						that.sinceid = data.sinceid

						for (var i = 0; i < data.data.length; ++i) {
							// console.log(data.data[i])
							that.items.push(data.data[i])
							that.$route.router.app.app_global.dat1 = that.items
						}

					},
					'json'
				).error(function() {
					alert('request errrrr')
					that.currentid = -1
				})
			}
		});

		this.initOriginData()
		//console.log('this.maxheight:' + $('#wrapper')[0].offsetHeight + ' ' + $('#scroller')[0].offsetHeight)
	},
	destroyed: function() {
		this.myScroll.destroy()
		this.myScroll = null
	},
	data: function() {
		return {
			items: [],
		}
	},
});