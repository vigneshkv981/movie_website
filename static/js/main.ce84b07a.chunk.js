(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),s=a(7),o=a.n(s),c=(a(17),a(25));a(18);var r=class extends n.Component{constructor(e){super(e),this.state={movies:[]}}componentDidMount(){this.fetchMovies()}fetchMovies(){c.a.get("https://www.omdbapi.com/?apikey=45f0782a&s=war").then(e=>{this.setState({movies:e.data.Search||[]})}).catch(e=>{console.error("Error fetching movies:",e)})}render(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Movie Listing Website"),i.a.createElement("div",{className:"movie-list"},this.state.movies.map(e=>i.a.createElement("div",{key:e.imdbID,className:"movie-card"},i.a.createElement("img",{src:e.Poster,alt:e.Title}),i.a.createElement("div",{className:"overlay"},i.a.createElement("div",{className:"movie-title"},e.Title))))))}};var l=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,26)).then(t=>{let{getCLS:a,getFID:n,getFCP:i,getLCP:s,getTTFB:o}=t;a(e),n(e),i(e),s(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(r,null))),l()},8:function(e,t,a){e.exports=a(23)}},[[8,1,2]]]);
//# sourceMappingURL=main.ce84b07a.chunk.js.map