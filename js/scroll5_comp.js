var MyScro5 = Vue.extend({
	template: '<div id="wrapper"><div id="scroller">\
        <ul >\
        	<template v-for="item in items">\
            <li><div class="container-fluid" style="height:60px" >\
            <div class="row" style="margin:0px -35px ">\
            <div class="col-sm-3 col-xs-3"><img :src="item.cover" width="60px" height="59px" style=""/></div>\
            <div class="col-sm-9 col-xs-9" style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;width:18em;">\
            <div class="row"><h5 v-on:tap="godetail($index)"><b><a>{{item.title}}</a></b></h5></div>\
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
			console.log('hook-example activated!')
			//this.loaded()
			transition.next()
		},
		deactivate: function(transition) {
			console.log('hook-example deactivated!')
			//this.myScroll.destroy()
			//this.myScroll = null
			transition.next()
		}
	},
	methods: {
		godetail: function(idx) {
			this.$route.router.app.show = true
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
				//scrollbars: true,
			});
			document.addEventListener('touchmove', function(e) {
				e.preventDefault();
			}, false);
			this.myScroll.on('scrollEnd', function() {
				console.log(this.y + ' ' + this.maxScrollY)

				if (this.y == 0) {
					console.log('刷新数据')
					console.log(that.data_tel_url)
					$.get(that.data_tel_url, {
							'mail': 'xxx@xxx.xxx'
						},
						function(data) {
							console.log('!!!!!!!!!!!!!!!!!!!!!!!!')
							console.log(that)
							console.log(data)
							console.log('!!!!!!!!!!!!!!!!!!!!!!!!')
							that.more = data.more
							that.sinceid = data.sinceid
								//test
							that.items = data.data
							that.$route.router.app.app_global.dat1 = that.items
							Vue.nextTick(function() {
								// DOM 更新了
								console.log('nexttirck000')
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
					console.log('加载更多数据')
					console.log(that)
					console.log(that.more + ' ' + that.sinceid)
					if (!that.more && that.sinceid != that.currentid)
						return
					that.currentid = that.sinceid
					$.get(that.data_tel_url, {
							'sinceid': that.sinceid
						},
						function(data) {
							console.log(that)
							console.log(data)
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
						that.currentid = -1
					})
				}
			})
		},
		initOriginData: function() {
			console.log('initOriginData' + this.items.length + " " + this.needfix)
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
					Vue.nextTick(function() {
						// DOM 更新了
						that.fixHeight()
						that.myScroll.refresh()
					})
				},
				'json'
			).error(function() {
				alert('request errrrr')
			})
		},
		fixHeight: function() {
			if (!this.needfix)
				return
			fixh = this.wrapperheight - $('#scroller')[0].offsetHeight
			console.log('fixh: ' + fixh)
			if (fixh > 0) {
				$('#wrapper')[0].style.bottom = (fixh + 1) + 'px'
			} else {
				this.needfix = false
				$('#wrapper')[0].style.bottom = '0px'
			}
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
		this.loaded()
		this.wrapperheight = $('#wrapper')[0].offsetHeight
		this.scrollheight = $('#scroller')[0].offsetHeight
		this.needfix = this.scrollheight < this.wrapperheight
		this.fixHeight()
		this.myScroll.refresh()

		this.initOriginData()
		console.log('this.maxheight:' + $('#wrapper')[0].offsetHeight + ' ' + $('#scroller')[0].offsetHeight)
		$('#warpper').on('swipeleft',function(){alert('a');});
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

//Vue.component('my-scroll', MyScro5)