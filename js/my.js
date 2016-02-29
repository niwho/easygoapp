// define some components
var Foo = Vue.extend({
	data: function() {
		return {
			tel: {},
		}
	},
	template: '<div><div>\
        <nav class="navbar navbar-default navbar-fixed-top">\
            <div class="container" style="margin-top:14px;font-size:16px">\
                <div class="row">\
                    <div class="col-xs-1 col-md-1" v-on:click="goback"><span class=" glyphicon glyphicon-chevron-left"></span></div> <div class="col-xs-9 col-md-9" style="text-align:center">测试</div>\
            </div>\
        </nav>\
    </div><div id="test_containt" class="container-fluid" style="margin-top:50px;overflow-y: scroll; OVERFLOW-X:hidden;">\
       \
       \
       相信大家在微信上一定被上面的这段话刷过屏，群发消息应该算是微信上流传最广的找到删除好友的方法了。但群发消息不仅仅会把通讯录里面所有的好友骚扰一遍，而且你还得挨个删除好几百个聊天记录，回复大家的疑问和鄙视。作为一个互联网从业者，除了群发消息就不能有更高效、不打扰好友的方式么？\
答案是当然有，微信在拉好友进群聊的时候，如果这个人删除了你好友的话，会提示你一下「请先发送朋友验证申请给某某，对方将你加为微信朋友后，你才能邀请其加入群聊。」有办法了，那我把微信好友拉一个大群里面，然后默默的删掉微信群不就好了么。\
于是 Github 上就有一位叫 0x5e 的开发者写了这么一个 Python 脚本来代替你手动拉群和踢人。经过笔者测试，目前只能支持 Mac 的操作系统。在此之前，笔者在稀土掘金上先放出了Github的方法，这里再详细提下。\
文章前两天就发出，不懂编程的小伙伴觉得代码太复杂，于是出了视频教程，以供参考：\
相信大家在微信上一定被上面的这段话刷过屏，群发消息应该算是微信上流传最广的找到删除好友的方法了。但群发消息不仅仅会把通讯录里面所有的好友骚扰一遍，而且你还得挨个删除好几百个聊天记录，回复大家的疑问和鄙视。作为一个互联网从业者，除了群发消息就不能有更高效、不打扰好友的方式么？\
答案是当然有，微信在拉好友进群聊的时候，如果这个人删除了你好友的话，会提示你一下「请先发送朋友验证申请给某某，对方将你加为微信朋友后，你才能邀请其加入群聊。」有办法了，那我把微信好友拉一个大群里面，然后默默的删掉微信群不就好了么。\
于是 Github 上就有一位叫 0x5e 的开发者写了这么一个 Python 脚本来代替你手动拉群和踢人。经过笔者测试，目前只能支持 Mac 的操作系统。在此之前，笔者在稀土掘金上先放出了Github的方法，这里再详细提下。\
文章前两天就发出，不懂编程的小伙伴觉得代码太复杂，于是出了视频教程，以供参考：\
相信大家在微信上一定被上面的这段话刷过屏，群发消息应该算是微信上流传最广的找到删除好友的方法了。但群发消息不仅仅会把通讯录里面所有的好友骚扰一遍，而且你还得挨个删除好几百个聊天记录，回复大家的疑问和鄙视。作为一个互联网从业者，除了群发消息就不能有更高效、不打扰好友的方式么？\
答案是当然有，微信在拉好友进群聊的时候，如果这个人删除了你好友的话，会提示你一下「请先发送朋友验证申请给某某，对方将你加为微信朋友后，你才能邀请其加入群聊。」有办法了，那我把微信好友拉一个大群里面，然后默默的删掉微信群不就好了么。\
于是 Github 上就有一位叫 0x5e 的开发者写了这么一个 Python 脚本来代替你手动拉群和踢人。经过笔者测试，目前只能支持 Mac 的操作系统。在此之前，笔者在稀土掘金上先放出了Github的方法，这里再详细提下。\
文章前两天就发出，不懂编程的小伙伴觉得代码太复杂，于是出了视频教程，以供参考：\
        \
    </div></div>',
	route: {
		data: function(transition) {
			//console.log('foo data')
			this.$route.xxx = 'hello'
			this.$route.router.app.show = true

			//sq = transition.to.params.telsequence
			//sq = parseInt(sq)
			/*sq = 2
			this.sq = 2
				//console.log(this.$loadingRouteData)
			//console.log('@@@@')
			//console.log(transition.from)
			//console.log(this.$route.router.app.app_global.dat1)
				//console.log(this.$route.router.app.app_global.dat1[sq])
			if (this.$route.router.app.app_global.dat1) {
				transition.next({
					'tel': this.$route.router.app.app_global.dat1[sq]
				})
				if (this.tel.contens && this.tel.contens.length == 0)
					this.get_data(0)
			} else*/
			transition.next()
				//console.log(this.$loadingRouteData)
		},
		activate: function(transition) {
			//console.log('foo activated!')
			transition.next()

		},
		deactivate: function(transition) {
			//console.log('foo dectivated!')
			transition.next()
		}
	},

	methods: {
		goback: function(evt) {
			//this.$route.router.app.show = true
			//console.log('Detail back back')
			//console.log(window.history.back())
			this.$route.router.go(window.history.back())
				//this.$route.router.go({name: 'meiju'})
		},
		get_data: function(mark) {
			thatxxfoo = this
				//console.log(thatxxfoo.data_tel_url + ' ' + mark)
			$.get(thatxxfoo.data_tel_url, {
					tvid: thatxxfoo.tel.id
				},
				function(data) {
					// that.more = data.more
					// that.sinceid = data.sinceid
					//test
					//console.log(data)
					thatxxfoo.tel.contens = data
				},
				'json'
			).error(function() {
				alert('request errrrr')
			})

		},
	},
	created: function() {
		//console.log('detail created ~~~~~~~~~~~~~~')
		this.data_tel_url = "http://121.42.179.62/meiju/get_episode"

	},

	ready: function() {
		/*main = document.getElementById('test_containt')
		//console.log('###############################################')
		//console.log(main.scrollHeight)
		//console.log(main.offsetWidth)
		//console.log($(window).height())
		main.style.width = main.offsetWidth + 'px'
		main.style.height = $(window).height() - 50 + 'px'
			//console.log(this.tel.contens)
			//console.log(this.tel)
		console.log('###############################################')
*/
		//获取数据
		//if (this.tel.contens &&this.tel.contens.length == 0)
		//    this.get_data(1)

	},
})
var test = ''
var Bar = Vue.extend({
	template: '<div id="bar"><nav class="navbar navbar-default navbar-fixed-top">\
  <div class="container" style="margin-top:14px;font-size:16px">\
  <div class="row">\
  <div class="col-xs-12 col-md-12" style="text-align:center">美剧排行榜</div>\
  </div></div>\
  </nav><div style="margin-top:50px;"><div class="view">\
  <div v-if="$loadingRouteData">Loading ...</div>\
  <div v-if="!$loadingRouteData">\
  <san>{{$loadingRouteData }},{{user}}</san>\
  <router-view></router-view>\
  </div>\
  </div></div></div>',
	//<my-scroll v-ref:scroller></my-scroll>\
	route: {
		data: function(transition) {
			this.$route.router.app.show = false
			this.refreshData()
				//console.log(this.$loadingRouteData)
				//console.log('transition: ')
				//console.log(transition)
			transition.next()
				//console.log(this.$loadingRouteData)


		},
		activate: function(transition) {
			//console.log('bar activated!')

			transition.next()
				//this.myiscroll = new IScroll('#wrapper')
				//var myScroll = new IScroll('#wrapper', {probeType: 1});
		},
		deactivate: function(transition) {
			//console.log('bar deactivated!')
			transition.next()
				//this.myiscroll.destroy()

		}
	},
	methods: {
		goback: function(evt) {
			this.$route.router.app.show = true
				//console.log('bar back back')
				//console.log(window.history.back())
			this.$route.router.go(window.history.back())
		},
		refreshData: function() {
			//this.$refs.scroller.initOriginData()
			//console.log('~~~~~~~~~~~~~~~~~~``')
			if (this.$refs.scroller != undefined)
				this.$refs.scroller.initOriginData()

		},
		myscroll: function(evt) {
			//console.log(evt)
		},
	},
	data: function() {
		return {
			user: '',
			mail: '',
		}
	},
	created: function() {
		//console.log('bar created')
	},
	ready: function() {
		//console.log('bar ready')
		//this.iscroll = new IScroll('#wrapper')
		//console.log('~~~~~~~~~~~~~~~123~~~``')
		//console.log(this.$refs)
		//console.log(this.$refs.scroller)
		thatbar = this;
		var start_x, start_y, end_x, end_y, move_num;
		var client_width = $(window).width();
		console.log(client_width)
		$("#bar").on("touchstart", function(e) {
			start_x = e.originalEvent.targetTouches[0].clientX;
			start_y = e.originalEvent.targetTouches[0].clientY;
			//console.log(start_x);
			//console.log(start_y);
			console.log("hh: " + client_width)

		});
		/*$("#bar").on("touchmove", function(e) {
        //$(this).removeClass("slow_action");
        end_x = e.originalEvent.targetTouches[0].clientX;
        end_y = e.originalEvent.targetTouches[0].clientY;
        move_num = (end_x - start_x).toFixed(2);
        console.log(move_num);
        var tf_num = "translateX(" + move_num + "px)";
        $(this).css("-webkit-transform", tf_num);
 
    });*/
		$("#bar").on("touchend", function() {
			console.log('touchend ' + move_num + ' ' + client_width / 3)
			if (move_num > client_width / 3) {
				thatbar.$route.router.app.show = true
					//console.log('bar back back')
					//console.log(window.history.back())
				thatbar.$route.router.go(window.history.back())
			}
			//$(this).addClass("slow_action");
			/*if (move_num < -(client_height / 2)) {
 
            $(this).css({
                "-webkit-transform": "translateY(-900px)",
 
            });
 
        } else if (move_num > 0) {
            $(this).css({
                "-webkit-transform": "translateY(0px)",
 
            });
        } else {
            $(this).css({
                "-webkit-transform": "translateY(0px)",
 
            });
 
        }*/
			// var tf_num = "translateX(" + move_num + "px)";
			// $(this).css("-webkit-transform", tf_num);


		});
	},
	destroyed: function() {
		//console.log('bar destroyed')
		//this.iscroll.destroy()
		//this.iscroll = null
	},
})

var Detail = Vue.extend({
		template: '<div id="detail">\
  <div>\
        <nav class="navbar navbar-default navbar-fixed-top">\
            <div class="container" style="margin-top:14px;font-size:16px">\
                <div class="row">\
                    <div class="col-xs-1 col-md-1" v-on:click="goback"><span class=" glyphicon glyphicon-chevron-left"></span></div> <div class="col-xs-9 col-md-9" style="text-align:center">{{tel.title}}</div>\
            </div>\
        </nav>\
    </div>\
    <div id="wrapperdetail"><div id="scrollerdetail" >\
        <ul ><li>\
        <div id="main_containt" class="container-fluid" >\
        <img style="display:block;width:100%;" :src="tel.cover" />\
        <div class="row" style="padding:10px 10px">\
                    <span>{{tel.indro}}</span>\
        </div>\
        <div class="row" style="margin:10px 0px 0px 0px;">\
            <div class="list-group" v-for="item in tel.seasons">\
              <a v-on:tap="goespisode({name:\'episode\', params:{telsequence: sq,season:item}})" class="list-group-item"><span class="text-primary">\
              <span v-if="item>0">第{{item}}季</span>\
              <span v-else>其它</span></a>\
            </div>\
        </div>\
    </div>\
        </li></ul>\
    </div></div>\
    </div>',
		//props: ['tele'],
		data: function() {
			return {
				tel: {},
			}
		},

		route: {
			activate: function(transition) {
				console.log('acivivate')
				transition.next()
			},
			data: function(transition) {
				console.log('#data')
				myjsdetyailthis = this
				this.$route.router.app.show = false
				sq = transition.to.params.telsequence
				sq = parseInt(sq)
				this.sq = sq
					////console.log(this.$loadingRouteData)
				console.log('@@@@')
					//console.log(transition.from)
					//console.log(this.$route.router.app.app_global.dat1)
				console.log(this.$route.router.app.app_global.dat1[sq])
				if (this.$route.router.app.app_global.dat1) {
					transition.next({
						'tel': this.$route.router.app.app_global.dat1[sq]
					})
					if (!this.tel.status.scrollinfo.hasOwnProperty('y'))
						this.tel.status.scrollinfo.y = 0
						/*if (this.tel.contens && this.tel.contens.length == 0)
							this.get_data(0)*/
					Vue.nextTick(function() {
						// DOM 更新了
						//myjsdetyailthis.fixHeight()
						console.log('resharp')
						myjsdetyailthis.fixHeight()
						myjsdetyailthis.myScroll.refresh()
						console.log('myjsdetyailthis.tel.status.scrollinfo.y ' + myjsdetyailthis.tel.status.scrollinfo.y)
						myjsdetyailthis.myScroll.scrollTo(0, myjsdetyailthis.tel.status.scrollinfo.y)
					})
				} else
					transition.next()
					//console.log(this.$loadingRouteData)

			},
		},

		methods: {
			goespisode: function(url) {
				this.$route.router.go(url)
				this.tel.status.scrollinfo.y = this.myScroll.y
			},
			goback: function(evt) {
				this.$route.router.app.show = false
					//console.log('Detail back back')
					//console.log(window.history.back())
				this.$route.router.go(window.history.back())
					//this.$route.router.go({name: 'home'})
				this.tel.status.scrollinfo.y = this.myScroll.y
			},

			get_data: function(mark) {
				thatxx = this
					//console.log(thatxx.data_tel_url + ' ' + mark)
				$.get(thatxx.data_tel_url, {
						tvid: thatxx.tel.id
					},
					function(data) {
						// that.more = data.more
						// that.sinceid = data.sinceid
						//test
						//console.log(data)
						thatxx.tel.contens = data
						Vue.nextTick(function() {
							// DOM 更新了
							//myjsdetyailthis.fixHeight()
							console.log('resharp')
							thatxx.myScroll.refresh()
						})
					},
					'json'
				).error(function() {
					alert('request errrrr')
				})

			},
			fixHeight: function() {
				fixh = $('#wrapperdetail')[0].offsetHeight - $('#scrollerdetail')[0].offsetHeight
				console.log('fixh: ' + fixh)
				if (fixh > 0) {
					$('#wrapperdetail')[0].style.bottom = (fixh + 0) + 'px'
				} else {
					this.needfix = false
					$('#wrapperdetail')[0].style.bottom = '0px'
				}
			}
		},
		created: function() {
			console.log('detail created ~~~~~~~~~~~~~~')
			this.data_tel_url = "http://121.42.179.62/meiju/get_episode"


		},
		ready: function() {
			thatdetailx1 = this
			this.myScroll = new IScroll('#wrapperdetail', {
				mouseWheel: true,
				tap: true,
			});
			//this.myScroll.refresh()

			//main = document.getElementById('main_containt')
			//console.log('###############################################')
			//console.log(main.scrollHeight)
			//console.log(main.offsetWidth)
			console.log($(window).height())
				//main.style.width = main.offsetWidth + 'px'
				//main.style.height = $(window).height() - 50 + 'px'
				//console.log(this.tel.contens)
				//console.log(this.tel)
				//console.log('###############################################')

		},
		destroyed: function() {
			this.myScroll.destroy()
			this.myScroll = null
		},


	})
	// the router needs a root component to render.
	// for demo purposes, we will just use an empty one
	// because we are using the HTML as the app template.
var Episode = Vue.extend({
	template: '<div id="detail">\
  <div>\
        <nav class="navbar navbar-default navbar-fixed-top">\
            <div class="container" style="margin-top:14px;font-size:16px">\
                <div class="row">\
                    <div class="col-xs-1 col-md-1" v-on:click="goback"><span class=" glyphicon glyphicon-chevron-left"></span></div>\
                     <div class="col-xs-9 col-md-9" style="text-align:center">{{tel.title}}</div>\
            </div>\
            </div></nav>\
    </div>\
  <div id="episode_containt" class="container-fluid" style="margin-top:50px;overflow-y: scroll; OVERFLOW-X:hidden;">\
  <div id="wrapper"><div id="scroller">\
        <ul >\
        	<li>\
        	<span v-if="season>0"><b>第{{season}}季</b></span>\
    <span v-else><b>其它</b></span>\
        	</li>\
        	<div style="min-height:627px;"><template v-for="item in epi"><li>\
      <div class="row" style="margin:0px -10px 0px;">\
      <div class="col-xs-3 col-sm-3" v-if="epi.season>0">第{{item.number}}集</div>\
      <div class="col-xs-3 col-sm-3" v-else>{{item.subtitle}}</div>\
      <div class="col-xs-2 col-sm-2"><template v-if="item.res>0">{{item.res}}P</template>\
      <template v-else>未知</template></div>\
      <template v-for="lk in item.links">\
      <div class="col-xs-1 col-sm-1"><a :href="lk"><img src="img/ot.gif"/></a>\
      </div>\
      </template> \
      </div>\
     </template></div>\
            </li></ul>\
  </div>\
</div>',
	data: function() {
		return {
			season: 0,
			epi: [],
			//title: '',
			tel: 0,
		}
	},
	route: {
		data: function(transition) {
			thisyy = this
			this.$route.router.app.show = false
			sq = transition.to.params.telsequence
			sea = transition.to.params.season
			sq = parseInt(sq)
			sea = parseInt(sea)
			console.log('sq: ' + sq + ' season: ' + sea)
				//console.log(this.$loadingRouteData)
				//console.log(this.$route.router.app.app_global.dat1)
				//console.log(this.$route.router.app.app_global.dat1[sq])
			if (this.$route.router.app.app_global.dat1) {
				transition.next({
					'season': sea,
					'tel': this.$route.router.app.app_global.dat1[sq],
					//'title': this.$route.router.app.app_global.dat1[sq].title,
				})
				console.log(this.$route.router.app.app_global.dat1[sq])
				console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
				console.log(this.$route.router.app.app_global.dat1[sq].contents)
				if (!this.$route.router.app.app_global.dat1[sq].contents.hasOwnProperty(sea)) {
					this.get_data(1)
				} else
					this.epi = this.tel.contents[thatxx.season].episode

			} else
				transition.next()
				//console.log(this.$loadingRouteData)
				//console.log('eeeeeeeeeeeeeeeeepi')
				//console.log(this.epi)
			Vue.nextTick(function() {
				// DOM 更新了
				//myjsdetyailthis.fixHeight()
				console.log('resharp22')
				thisyy.myScroll.refresh()
				if (thisyy.tel.contents[thisyy.season])
					thisyy.myScroll.scrollTo(0, thisyy.tel.contents[thisyy.season].status.y)
			})

		},
	},
	methods: {
		goback: function(evt) {
			//this.$route.router.app.show = true
			//console.log('Detail back back')
			//console.log(window.history.back())
			this.$route.router.go(window.history.back())
			this.tel.contents[this.season].status.y = this.myScroll.y
		},

		get_data: function(mark) {
			thatxx = this
				//console.log(thatxx.data_tel_url + ' ' + mark)
			$.get(thatxx.data_tel_url, {
					tvid: thatxx.tel.id,
					season: thatxx.season,
					sinceid: 1
				},
				function(data) {
					// that.more = data.more
					// that.sinceid = data.sinceid
					//test
					//console.log(data)
					thatxx.tel.contents[thatxx.season] = {}

					console.log(data.data)
					console.log(thatxx.tel.contents[thatxx.season])
					thatxx.tel.contents[thatxx.season].episode = data.data.episode
					console.log('!!' + thatxx.season + ' ,,' + thatxx.tel.contents[thatxx.season])
					console.log(thatxx.tel.contents[thatxx.season])
					thatxx.epi = thatxx.tel.contents[thatxx.season].episode
					thatxx.tel.contents[thatxx.season].status = data.status
					Vue.nextTick(function() {
						// DOM 更新了
						//myjsdetyailthis.fixHeight()
						console.log('resharp')
						console.log(thatxx.tel.contents[thatxx.season].episode)
						thatxx.myScroll.refresh()
						thatxx.myScroll.scrollTo(0, thatxx.tel.contents[thatxx.season].status.y)
					})
				},
				'json'
			).error(function() {
				alert('request errrrr')
			})

		},
	},
	created: function() {
		console.log('detail created ~~~~~~~~~~~~~~')
		this.data_tel_url = "http://121.42.179.62/meiju/get_episode_spec/"

	},
	ready: function() {
		//main = document.getElementById('episode_containt')
		//console.log(main.scrollHeight)
		//console.log(main.offsetWidth)
		//console.log($(window).height())
		//main.style.width = main.offsetWidth + 'px'
		//main.style.height = $(window).height() - 50 + 'px'
		thatxxepisode = this
			//this.data_tel_url = ''
		this.myScroll = new IScroll('#wrapper', {
			mouseWheel: true,
			tap: true,
		});

		this.myScroll.on('scrollEnd', function() {
			//console.log(this.y + ' ' + this.maxScrollY)
			if (this.y == this.maxScrollY) {
				// do something
				//that.itmes = [] //ajax刷新
				console.log('加载更多数据')
				console.log(thatxxepisode.tel.contents[thatxxepisode.season])
				console.log(thatxxepisode.tel.contents[thatxxepisode.season].status.more + ' ' + thatxxepisode.sinceid)
				if (thatxxepisode.tel.contents.hasOwnProperty(thatxxepisode.season)) {
					status = thatxxepisode.tel.contents[thatxxepisode.season].status
					if (!status.more && status.sinceid != status.currentid)
						return
					status.currentid = status.sinceid
				} else {
					thatxxepisode.tel.contents[thatxxepisode.season] = {}
					thatxxepisode.tel.contents[thatxxepisode.season].episode = []
					status = thatxxepisode.tel.contents[thatxxepisode.season].status = {}
					status.sinceid = 0
					status.y = 0
				}
				console.log('status:' + status)
				console.log(thatxxepisode.tel.contents[thatxxepisode.season].status.sinceid)
				$.get(thatxxepisode.data_tel_url, {
						tvid: thatxxepisode.tel.id,
						season: thatxxepisode.season,
						sinceid: thatxxepisode.tel.contents[thatxxepisode.season].status.sinceid,
					},
					function(data) {
						console.log(thatxxepisode)
						console.log(data)
						status.more = data.status.more
						status.sinceid = data.status.sinceid
						if (!data.data.episode)
							return
						for (var i = 0; i < data.data.episode.length; ++i) {
							// console.log(data.data[i])
							thatxxepisode.tel.contents[thatxxepisode.season].episode.push(data.data.episode[i])
						}
						epi = thatxxepisode.tel.contents[thatxxepisode.season].episode

						Vue.nextTick(function() {
							// DOM 更新了
							// console.log('nexttirck')
							//that.fixHeight()
							thatxxepisode.myScroll.refresh()
						})
					},
					'json'
				).error(function() {
					alert('request errrrr')
					status.currentid = -1
				})
			}
		})

	},
})

var A1pp = Vue.extend({
	data: function() {
		return {
			show: true,
			app_global: {},
		}
	},
})

// create a router instance
// you can pass in additional options here, but
// let's keep it simple for now.
var router = new VueRouter()

// define some routes.
// each route should map to a component.
// we'll talk about nested routes later.
router.map({
	'/foo': {
		name: 'home',
		component: Foo,

	},
	'/bar': {
		name: 'meiju',
		component: Bar,
		subRoutes: {
			'/': {
				component: MyScro5,
			},
		},
	},
	'/detail/:telsequence': {
		name: 'detail',
		component: Detail
	},
	'/episode/:telsequence/:season': {
		name: 'episode',
		component: Episode,
	},
})


// now we can start the app!
// router will create an instance of App and mount to
// the element matching the selector #app.
router.start(A1pp, '#a2pp')