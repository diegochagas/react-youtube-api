(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(48)},22:function(e,t,a){},23:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(14),r=a.n(c),o=(a(22),a(2)),s=a(3),l=a(5),u=a(4),m=a(6),d=(a(23),a(15)),v=a.n(d).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{maxResults:5,key:"AIzaSyA23m5YJbOR0mNX2bpIXM5RxFEOgGgAYt0"}}),p=(a(43),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onSearchSubmit=function(e){e.preventDefault(),a.props.onSearchTermChange(a.state.term)},a.state={term:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("form",{className:"search-bar",onSubmit:this.onSearchSubmit},i.a.createElement("input",{value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})},placeholder:"Search video"}))}}]),t}(n.Component)),h=(a(44),a(45),function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("figure",{onClick:function(){return a(t)},className:"video-item"},i.a.createElement("img",{className:"thumbnail",src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),i.a.createElement("figcaption",{className:"video-title"},t.snippet.title))}),f=function(e){var t=e.videos.map(function(t){return i.a.createElement(h,{onVideoSelect:e.onVideoSelect,key:t.etag,video:t})});return i.a.createElement("div",{className:"video-list-container"},t)},b=(a(46),function(e){var t=e.video,a=t.snippet.title;return i.a.createElement("div",{className:"video-detail"},i.a.createElement("div",{className:"video-detail-column video-container"},i.a.createElement("iframe",{title:a,src:"https://www.youtube.com/embed/".concat(t.id.videoId)})),i.a.createElement("div",{className:"details video-detail-column"},i.a.createElement("div",null,a),i.a.createElement("div",null,t.snippet.description)))}),E=(a(47),function(e){return i.a.createElement("div",{className:"progress-bar"},i.a.createElement("span",null,"Loading..."),i.a.createElement("progress",null))}),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).videoSearch=function(e){v.get("/search?part=snippet&q=".concat(e)).then(function(e){a.setState({videos:e.data.items,selectedVideo:e.data.items[0]})}).catch(function(e){console.error(e)})},a.state={videos:[],selectedVideo:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.videoSearch("flowers")}},{key:"render",value:function(){var e=this;return 0===this.state.videos.length?i.a.createElement(E,null):i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(p,{onSearchTermChange:this.videoSearch})),i.a.createElement("div",{className:"App-body"},i.a.createElement(b,{video:this.state.selectedVideo}),i.a.createElement(f,{onVideoSelect:function(t){return e.setState({selectedVideo:t})},videos:this.state.videos})))}}]),t}(n.Component);r.a.render(i.a.createElement(S,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1b90969a.chunk.js.map