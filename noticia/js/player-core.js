class KiwiVSLPlayer {

  player;
  video;
  overlay;
  overlayButton;
  overlayBezel;
  params;

  constructor(player, instances, index) {
    this.index = index;
    this.player = player;
    this.instances = instances;
    this.params = new URLSearchParams(window.location.search);
    this.container = this.player.parentNode;

    // console.log(index);
    this.player.innerHTML += this.video_markup;
    this.container.innerHTML += this.first_layer + this.videothumbnail_markup;
    initKiwiPlayer();



    // this.video = this.player.querySelector('video');
    // this.container = this.video.parentNode();
    // this.video.remove();
    // this.container;

    // this.overlay = this.player.querySelector('.ytless-player--overlay');
    // this.overlayButton = this.overlay.querySelector('.ytless-player--button');
    // this.overlayBezelPause = this.player.querySelector('.ytp-bezel-pause');
    // this.overlayBezelPlay = this.player.querySelector('.ytp-bezel-play');

    // this.overlay.style.backgroundImage = this.poster;

    // this.player.addEventListener('click', this._click);
  }

  get poster() {
    return `url(${this.video.poster})`
  }

  get video_id() {
    // return this.params.get('v')
    return '1zYM5t98bXs'
  }

  get videothumbnail_id() {
    // return '1zYM5t98bXs'
    return 'joxkWtMGwik'
  }

  get video_markup() {

    let html, sources;

    sources = this.instances.map(instance => {

      const sources =
        `

        /* 720p */
        /* <source src="https://${instance}/latest_version?id=${this.video_id}&itag=22">
        <source src="https://${instance}/latest_version?id=${this.video_id}&itag=45">
        <source src="https://${instance}/latest_version?id=${this.video_id}&itag=84">
        <source src="https://${instance}/latest_version?id=${this.video_id}&itag=95"> */
        <source src="https://${instance}/latest_version?id=${this.video_id}&itag=102">

        /* 480p */
        /* <source src="https://${instance}/latest_version?id=${this.video_id}&itag=35">
        <source src="https://${instance}/latest_version?id=${this.video_id}&itag=44">
        <source src="https://${instance}/latest_version?id=${this.video_id}&itag=83">
        <source src="https://${instance}/latest_version?id=${this.video_id}&itag=94"> */
        <source src="https://${instance}/latest_version?id=${this.video_id}&itag=101">


        /* 360p */
        /* <source src="https://${instance}/latest_version?id=${this.video_id}&itag=34">
        <source src="https://${instance}/latest_version?id=${this.video_id}&itag=18">
        <source src="https://${instance}/latest_version?id=${this.video_id}&itag=82">
        <source src="https://${instance}/latest_version?id=${this.video_id}&itag=93"> */
        <source src="https://${instance}/latest_version?id=${this.video_id}&itag=100">

        /* 270p */
        /* <source src="https://${instance}/latest_version?id=${this.video_id}&itag=6"> */

        /* 240p */
        /* <source src="https://${instance}/latest_version?id=${this.video_id}&itag=5">
        <source src="https://${instance}/latest_version?id=${this.video_id}&itag=92">
        <source src="https://${instance}/latest_version?id=${this.video_id}&itag=132"> */

        /* 180p */
        /* <source src="https://${instance}/latest_version?id=${this.video_id}&itag=36"> */

        /* 144p */
        /* <source src="https://${instance}/latest_version?id=${this.video_id}&itag=17"> */

        /* 72p */
        <source src="https://${instance}/latest_version?id=${this.video_id}&itag=151">

        /* 1080p */
        <source src="https://${instance}/latest_version?id=${this.video_id}&itag=399">
        <source src="https://${instance}/latest_version?id=${this.video_id}&itag=248">
        <source src="https://${instance}/latest_version?id=${this.video_id}&itag=137">
        /* <source src="https://${instance}/latest_version?id=${this.video_id}&itag=37">
        <source src="https://${instance}/latest_version?id=${this.video_id}&itag=46">
        <source src="https://${instance}/latest_version?id=${this.video_id}&itag=85">
        <source src="https://${instance}/latest_version?id=${this.video_id}&itag=96"> */

        /* 3072p */
        /* <source src="https://${instance}/latest_version?id=${this.video_id}&itag=38"> */
      `;

      return sources
    }).join("");

    html =
      `
    <video id="player${this.index}" data-poster="https://i.ytimg.com/vi/${this.video_id}/maxresdefault.jpg">
      ${sources}
    </video>`;

    return html
  }

  get videothumbnail_markup() {

    let html, sources;

    sources = this.instances.map(instance => {

      const sources =
        `

        /* 360p */
        <source src="https://${instance}/latest_version?id=${this.videothumbnail_id}&itag=18">
        <source src="https://${instance}/latest_version?id=${this.videothumbnail_id}&itag=82">
        <source src="https://${instance}/latest_version?id=${this.videothumbnail_id}&itag=93"> */
        <source src="https://${instance}/latest_version?id=${this.videothumbnail_id}&itag=100">

        /* 270p */
        /* <source src="https://${instance}/latest_version?id=${this.videothumbnail_id}&itag=6"> */

        /* 240p */
        /* <source src="https://${instance}/latest_version?id=${this.videothumbnail_id}&itag=5">
        <source src="https://${instance}/latest_version?id=${this.videothumbnail_id}&itag=92">
        <source src="https://${instance}/latest_version?id=${this.videothumbnail_id}&itag=132"> */

        /* 180p */
        /* <source src="https://${instance}/latest_version?id=${this.videothumbnail_id}&itag=36"> */

        /* 144p */
        /* <source src="https://${instance}/latest_version?id=${this.videothumbnail_id}&itag=17"> */

        /* 72p */
        <source src="https://${instance}/latest_version?id=${this.videothumbnail_id}&itag=151">

      `;

      return sources
    }).join("");

    html =
      `
    <video id="player${this.index}_vt" class="kiwivsl-videothumbnail" >
      ${sources}
    </video>`;

    return html
  }

  get first_layer() {
    let html;

    html =
      `
      <div class="first-layer" onClick="stopVideo();player.toggleControls(); player.togglePlay();">
        <div class="box">
          <center>
            <span class="fl-span">Tu video ya comenzó</span>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="96.75px" height="80.563px" viewBox="7.999 9.062 46.75 32.563" enable-background="new 7.999 9.062 46.75 32.563" xml:space="preserve">
              <style>@-webkit-keyframes BLINK {0% { opacity: 0; }33% { opacity: 1; }66% { opacity: 1; }100% { opacity: 0; }}@keyframes BLINK {0% { opacity: 0; }33% { opacity: 1; }66% { opacity: 1; }100% { opacity: 0; }}.blink_1 {-webkit-animation: BLINK 2s infinite;animation: BLINK 2s infinite;opacity: 0;} .blink_2 {-webkit-animation: BLINK 2s infinite .3s;animation: BLINK 2s infinite .3s;opacity: 0;}.blink_3 {-webkit-animation: BLINK 2s infinite .6s;animation: BLINK 2s infinite .6s;opacity: 0;}.smartplay-svg-color {fill: #FFFFFF !important;}.adjustable {border: 4px solid red;}</style>
              <g class="adjustable fg">
              <path class="smartplay-svg-color" d="M53.249,39.616c-0.186,0-0.371-0.051-0.537-0.157l-43.5-27.75c-0.466-0.297-0.603-0.916-0.306-1.381c0.298-0.466,0.917-0.601,1.381-0.306l43.5,27.75c0.467,0.297,0.604,0.916,0.307,1.381C53.901,39.453,53.579,39.616,53.249,39.616z"></path><path class="blink_3 smartplay-svg-color" d="M48.896,33.467l1.699,1.085c3.497-7.791,2.073-17.271-4.313-23.659c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414C50.581,18.019,51.913,26.463,48.896,33.467z"></path>
              <path class="blink_3 smartplay-svg-color" d="M46.926,36.956c-0.612,0.863-1.286,1.695-2.059,2.469c-0.392,0.391-0.392,1.023,0,1.414c0.194,0.195,0.45,0.293,0.707,0.293c0.256,0,0.512-0.098,0.706-0.293c0.878-0.878,1.642-1.824,2.333-2.807L46.926,36.956z"></path><path class="blink_2 smartplay-svg-color" d="M42.543,29.415l1.777,1.135c1.545-5.315,0.229-11.293-3.953-15.476c-0.392-0.391-1.023-0.391-1.414,0c-0.392,0.391-0.392,1.023,0,1.414C42.454,19.987,43.639,24.925,42.543,29.415z"></path>
              <path class="blink_2 smartplay-svg-color" d="M41,33.174c-0.563,0.94-1.235,1.837-2.047,2.646c-0.391,0.392-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.916-0.914,1.676-1.924,2.317-2.984L41,33.174z"></path><path class="blink_1 smartplay-svg-color" d="M35.771,25.094l2.003,1.277c0.012-0.203,0.029-0.404,0.029-0.609c0-3.079-1.2-5.974-3.381-8.153c-0.391-0.391-1.022-0.391-1.414,0c-0.391,0.391-0.391,1.023,0,1.414C34.652,20.666,35.613,22.802,35.771,25.094z"></path>
              <path class="blink_1 smartplay-svg-color" d="M35.084,29.401c-0.474,1.145-1.172,2.197-2.076,3.1c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293c0.257,0,0.513-0.098,0.707-0.293c1.008-1.006,1.795-2.17,2.361-3.43L35.084,29.401z"></path><polygon class="smartplay-svg-color" points="28.124,20.215 28.124,14.991 24.635,17.99  "></polygon><path class="smartplay-svg-color" d="M20.921,20.366h-6.423c-0.553,0-1,0.508-1,1.135v8.229c0,0.627,0.447,1.135,1,1.135h7.375l6.25,5.875V24.96L20.921,20.366z"></path>
              </g>
            </svg>
            <span class="fl-span">Haga clíc para escuchar</span>
          </center>
        </div>
      </div>
    `;

    return html
  }

}
