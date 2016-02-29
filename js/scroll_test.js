var MyScrolltest = Vue.extend({
    template: '<div id="wrapper">\
    <div id="scroller">\
    <div id="pullDown">\
            <span class="pullDownIcon"></span><span class="pullDownLabel">下拉刷新55...</span>\
        </div>\
        <ul id="thelist">\
            <li>Pretty row 1</li>\
            <li>Pretty row 2</li>\
            <li>Pretty row 3</li>\
            <li>Pretty row 4</li>\
            <li>Pretty row 5</li>\
            <li>Pretty row 6</li>\
            <li>Pretty row 7</li>\
            <li>Pretty row 8</li>\
            <li>Pretty row 9</li>\
            <li>Pretty row 10</li>\
            <li>Pretty row 11</li>\
            <li>Pretty row 12</li>\
            <li>Pretty row 13</li>\
            <li>Pretty row 14</li>\
            <li>Pretty row 15</li>\
            <li>Pretty row 16</li>\
            <li>Pretty row 17</li>\
            <li>Pretty row 18</li>\
            <li>Pretty row 19</li>\
            <li>Pretty row 20</li>\
            <li>Pretty row 21</li>\
            <li>Pretty row 22</li>\
            <li>Pretty row 23</li>\
            <li>Pretty row 24</li>\
            <li>Pretty row 25</li>\
            <li>Pretty row 26</li>\
            <li>Pretty row 27</li>\
            <li>Pretty row 28</li>\
            <li>Pretty row 29</li>\
            <li>Pretty row 30</li>\
            <li>Pretty row 31</li>\
            <li>Pretty row 32</li>\
            <li>Pretty row 33</li>\
            <li>Pretty row 34</li>\
            <li>Pretty row 35</li>\
            <li>Pretty row 36</li>\
            <li>Pretty row 37</li>\
            <li>Pretty row 38</li>\
            <li>Pretty row 39</li>\
            <li>Pretty row 40</li>\
        </ul>\
        <div id="pullUp">\
            <span class="pullUpIcon"></span><span class="pullUpLabel">上拉加载4444...</span>\
        </div>\
    </div>\
</div>',
    methods: {
        loaded: function() {
            console.log('loaded')
            that = this
            pullDownEl = document.getElementById('pullDown');
            pullDownOffset = pullDownEl.offsetHeight;
            pullUpEl = document.getElementById('pullUp');
            pullUpOffset = pullUpEl.offsetHeight;

            this.myScroll = new iScroll('wrapper', {
                useTransition: true,
                topOffset: pullDownOffset,
                onRefresh: function() {
                    console.log('onRefresh')

                    if (pullDownEl.className.match('loading')) {
                        pullDownEl.className = '';
                        pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新1...';
                    } else if (pullUpEl.className.match('loading')) {
                        pullUpEl.className = '';
                        pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
                    }
                },
                onScrollMove: function() {
                    console.log('onScrollMove ' + this.y + ' ' + this.maxScrollY)
                    console.log(pullUpEl)
                    console.log(pullDownEl)
                    if (this.y > -5 && !pullDownEl.className.match('flip')) {
                        pullDownEl.className = 'flip';
                        pullDownEl.querySelector('.pullDownLabel').innerHTML = '放开刷新...';
                        console.log('xiaxia!!')
                        this.minScrollY = 0;
                    } else if (this.y < -5 && pullDownEl.className.match('flip')) {
                        pullDownEl.className = '';
                        pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
                        this.minScrollY = -pullDownOffset;
                        console.log('xiaxia')
                    } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                        pullUpEl.className = 'flip';
                        pullUpEl.querySelector('.pullUpLabel').innerHTML = '放开刷新...';
                        this.maxScrollY = this.maxScrollY;
                    } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                        pullUpEl.className = '';
                        pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载卡住...';
                        this.maxScrollY = pullUpOffset;
                    }
                },
                onScrollEnd: function() {
                    console.log('onScrollEnd ')
                    console.log(pullUpEl)
                    console.log(pullDownEl)

                    if (pullDownEl.className.match('flip')) {
                        pullDownEl.className = 'loading';
                        pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';
                        that.pullDownAction(); // Execute custom function (ajax call?)
                    } else if (pullUpEl.className.match('flip')) {
                        pullUpEl.className = 'loading';
                        pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中222...';
                        that.pullUpAction(); // Execute custom function (ajax call?)
                    }
                }
            });

            document.getElementById('wrapper').style.left = '0';
            document.addEventListener('touchmove', function(e) {
                e.preventDefault();
            }, false);


            this.generatedCount = 1
        },

        pullDownAction: function() {
            that = this
            setTimeout(function() { // <-- Simulate network congestion, remove setTimeout from production!
                var el, li, i;
                el = document.getElementById('thelist');

                for (i = 0; i < 3; i++) {
                    li = document.createElement('li');
                    li.innerText = 'Generated row ' + (++that.generatedCount);
                    el.insertBefore(li, el.childNodes[0]);
                }

                that.myScroll.refresh(); // Remember to refresh when contents are loaded (ie: on ajax completion)
            }, 1000); // <-- Simulate network congestion, remove setTimeout from production!
        },

        pullUpAction: function() {
            that = this
            setTimeout(function() { // <-- Simulate network congestion, remove setTimeout from production!
                var el, li, i;
                el = document.getElementById('thelist');

                for (i = 0; i < 3; i++) {
                    li = document.createElement('li');
                    li.innerText = 'Generated row ' + (++that.generatedCount);
                    el.appendChild(li, el.childNodes[0]);
                }
                console.log('pullUpAction')
                that.myScroll.refresh(); // Remember to refresh when contents are loaded (ie: on ajax completion)
            }, 1000); // <-- Simulate network congestion, remove setTimeout from production!


        }
    },
    ready: function() {
        this.loaded()
    },
    destroyed: function() {
        console.log('MyScrolltest destroyed')
        this.myScroll.destroy()
        this.myScroll = null
    },
})

Vue.component('my-scrolltest', MyScrolltest)

var MyCop = Vue.extend({
    template: '<div id="wrapper">\
    <div id="scroller">\
            <span class="pullDownIcon"></span><span class="pullDownLabel">Pull down to refresh...</span>\
        </div>\
\
        <ul id="thelist">\
            <li>Pretty row 1</li>\
            <li>Pretty row 2</li>\
            <li>Pretty row 3</li>\
            <li>Pretty row 4</li>\
            <li>Pretty row 5</li>\
            <li>Pretty row 6</li>\
            <li>Pretty row 7</li>\
            <li>Pretty row 8</li>\
            <li>Pretty row 9</li>\
            <li>Pretty row 10</li>\
            <li>Pretty row 11</li>\
            <li>Pretty row 12</li>\
            <li>Pretty row 13</li>\
            <li>Pretty row 14</li>\
            <li>Pretty row 15</li>\
            <li>Pretty row 16</li>\
            <li>Pretty row 17</li>\
            <li>Pretty row 18</li>\
            <li>Pretty row 19</li>\
            <li>Pretty row 20</li>\
            <li>Pretty row 21</li>\
            <li>Pretty row 22</li>\
            <li>Pretty row 23</li>\
            <li>Pretty row 24</li>\
            <li>Pretty row 25</li>\
            <li>Pretty row 26</li>\
            <li>Pretty row 27</li>\
            <li>Pretty row 28</li>\
            <li>Pretty row 29</li>\
            <li>Pretty row 30</li>\
            <li>Pretty row 31</li>\
            <li>Pretty row 32</li>\
            <li>Pretty row 33</li>\
            <li>Pretty row 34</li>\
            <li>Pretty row 35</li>\
            <li>Pretty row 36</li>\
            <li>Pretty row 37</li>\
            <li>Pretty row 38</li>\
            <li>Pretty row 39</li>\
            <li>Pretty row 40</li>\
        </ul>\
        <div id="pullUp">\
            <span class="pullUpIcon"></span><span class="pullUpLabel">上拉加载33...</span>\
        </div>\
    </div>\
</div>',
})

Vue.component('my-cop', MyCop)
