<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/*每个页面公共css */
	App{
		width: 100%;
		height: 100%;
		background: #fff;
	}
	page{
		width: 100%;
		height: 100%;
		background: #fff;
	}
	view
	{
		box-sizing: border-box;
		position: relative;
	}
	input
	{
		box-sizing: border-box;
	}
	image
	{
		vertical-align: middle;
	}
	button
	{
		box-sizing: border-box;
	}
	.clear_button:after
	{
		border: none;
	}
	.clear_button
	{
		border: none;
		background: none;
		padding:0px;
		margin:0px;
		border-radius: 0px;
		line-height: inherit;
	}
	
	.groupheader
	{
		color:#ccc;
		padding:10px 20px;
		font-size: 14px;
	}
	.groupedcells
	{
		
	}
	.groupedcells>.cell:nth-last-child(1)
	{
		border-bottom: none;
	}
	.groupedcells>.cell
	{
		background: #fff;
		border-bottom: 1px solid #f2f2f2;
		height: 44px;
		line-height: 44px;
		font-size: 14px;
		display: flex;
		padding: 0px 20px;
	}
	.groupedcells>.cell>.title
	{
		width:140px;
		text-align: left;
	}
	.groupedcells>.cell>.description
	{
		flex:1;
		text-align: right;
		color: #ccc;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.groupedcells>.cell>.accessory
	{
		margin-left: 5px;
	}
	.groupedcells>.cell>.accessory>text
	{
		font-size: 12px;
		color:#ccc;
	}
	
	movable-view{
		box-sizing: border-box;
	}
	.btn_prev{
		flex:1;
		height: 44px;
		line-height: 44px;
		background: #000;
		border-top-left-radius: 22px;
		border-bottom-left-radius: 22px;
		text-align: center;
		color:#fff;
	}
	.btn_next{
		flex:1;
		height: 44px;
		line-height: 44px;
		background: #000;
		border-top-right-radius: 22px;
		border-bottom-right-radius: 22px;
		text-align: center;
		color:#fff;
	}
	
	@font-face {
	  font-family: 'brandicon';  /* Project id 2868513 */
	  src: url('//at.alicdn.com/t/font_2868513_4z5q9k4ii66.woff2?t=1636032849408') format('woff2'),
	       url('//at.alicdn.com/t/font_2868513_4z5q9k4ii66.woff?t=1636032849408') format('woff'),
	       url('//at.alicdn.com/t/font_2868513_4z5q9k4ii66.ttf?t=1636032849408') format('truetype');
	}
	
	.brandicon {
	  font-family: "brandicon" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-envato:before {
	  content: "\ec13";
	}
	
	.icon-microsoftedge:before {
	  content: "\ed13";
	}
	
	.icon-svelte:before {
	  content: "\ee13";
	}
	
	.icon-empirekred:before {
	  content: "\ec14";
	}
	
	.icon-microsoftexcel:before {
	  content: "\ed14";
	}
	
	.icon-swagger:before {
	  content: "\ee14";
	}
	
	.icon-eventbrite:before {
	  content: "\ec15";
	}
	
	.icon-microsoftoffice:before {
	  content: "\ed15";
	}
	
	.icon-swarm:before {
	  content: "\ee15";
	}
	
	.icon-esea:before {
	  content: "\ec16";
	}
	
	.icon-microsoftonedrive:before {
	  content: "\ed16";
	}
	
	.icon-swift:before {
	  content: "\ee16";
	}
	
	.icon-ethereum:before {
	  content: "\ec17";
	}
	
	.icon-microsoftonenote:before {
	  content: "\ed17";
	}
	
	.icon-symfony:before {
	  content: "\ee17";
	}
	
	.icon-etsy:before {
	  content: "\ec18";
	}
	
	.icon-microsoftoutlook:before {
	  content: "\ed18";
	}
	
	.icon-tailwindcss:before {
	  content: "\ee18";
	}
	
	.icon-eslint:before {
	  content: "\ec19";
	}
	
	.icon-microsoftpowerpoint:before {
	  content: "\ed19";
	}
	
	.icon-t-mobile:before {
	  content: "\ee19";
	}
	
	.icon-epson:before {
	  content: "\ec1a";
	}
	
	.icon-microsoftteams:before {
	  content: "\ed1a";
	}
	
	.icon-tableau:before {
	  content: "\ee1a";
	}
	
	.icon-everplaces:before {
	  content: "\ec1b";
	}
	
	.icon-microstrategy:before {
	  content: "\ed1b";
	}
	
	.icon-synology:before {
	  content: "\ee1b";
	}
	
	.icon-evernote:before {
	  content: "\ec1c";
	}
	
	.icon-microsoftword:before {
	  content: "\ed1c";
	}
	
	.icon-tails:before {
	  content: "\ee1c";
	}
	
	.icon-evry:before {
	  content: "\ec1d";
	}
	
	.icon-minutemailer:before {
	  content: "\ed1d";
	}
	
	.icon-teamviewer:before {
	  content: "\ee1d";
	}
	
	.icon-eventstore:before {
	  content: "\ec1e";
	}
	
	.icon-mix:before {
	  content: "\ed1e";
	}
	
	.icon-ted:before {
	  content: "\ee1e";
	}
	
	.icon-eyeem:before {
	  content: "\ec1f";
	}
	
	.icon-mixcloud:before {
	  content: "\ed1f";
	}
	
	.icon-tapas:before {
	  content: "\ee1f";
	}
	
	.icon-expo:before {
	  content: "\ec20";
	}
	
	.icon-mixer:before {
	  content: "\ed20";
	}
	
	.icon-telegram:before {
	  content: "\ee20";
	}
	
	.icon-f-secure:before {
	  content: "\ec21";
	}
	
	.icon-mocha:before {
	  content: "\ed21";
	}
	
	.icon-tele5:before {
	  content: "\ee21";
	}
	
	.icon-faceit:before {
	  content: "\ec22";
	}
	
	.icon-monero:before {
	  content: "\ed22";
	}
	
	.icon-tencentqq:before {
	  content: "\ee22";
	}
	
	.icon-facebook:before {
	  content: "\ec23";
	}
	
	.icon-monkeytie:before {
	  content: "\ed23";
	}
	
	.icon-tencentweibo:before {
	  content: "\ee23";
	}
	
	.icon-fandango:before {
	  content: "\ec24";
	}
	
	.icon-monogram:before {
	  content: "\ed24";
	}
	
	.icon-tensorflow:before {
	  content: "\ee24";
	}
	
	.icon-favro:before {
	  content: "\ec25";
	}
	
	.icon-mongodb:before {
	  content: "\ed25";
	}
	
	.icon-teespring:before {
	  content: "\ee25";
	}
	
	.icon-feathub:before {
	  content: "\ec26";
	}
	
	.icon-monster:before {
	  content: "\ed26";
	}
	
	.icon-terraform:before {
	  content: "\ee26";
	}
	
	.icon-f-droid:before {
	  content: "\ec27";
	}
	
	.icon-monzo:before {
	  content: "\ed27";
	}
	
	.icon-teradata:before {
	  content: "\ee27";
	}
	
	.icon-feedly:before {
	  content: "\ec28";
	}
	
	.icon-moo:before {
	  content: "\ed28";
	}
	
	.icon-tesla:before {
	  content: "\ee28";
	}
	
	.icon-epicgames:before {
	  content: "\ec29";
	}
	
	.icon-mozilla:before {
	  content: "\ed29";
	}
	
	.icon-themighty:before {
	  content: "\ee29";
	}
	
	.icon-exercism:before {
	  content: "\ec2a";
	}
	
	.icon-mxlinux:before {
	  content: "\ed2a";
	}
	
	.icon-themoviedatabase:before {
	  content: "\ee2a";
	}
	
	.icon-expertsexchange:before {
	  content: "\ec2b";
	}
	
	.icon-musescore:before {
	  content: "\ed2b";
	}
	
	.icon-theregister:before {
	  content: "\ee2b";
	}
	
	.icon-figma:before {
	  content: "\ec2c";
	}
	
	.icon-myspace:before {
	  content: "\ed2c";
	}
	
	.icon-tidal:before {
	  content: "\ee2c";
	}
	
	.icon-fidoalliance:before {
	  content: "\ec2d";
	}
	
	.icon-nativescript:before {
	  content: "\ed2d";
	}
	
	.icon-tiktok:before {
	  content: "\ee2d";
	}
	
	.icon-firebase:before {
	  content: "\ec2e";
	}
	
	.icon-mysql:before {
	  content: "\ed2e";
	}
	
	.icon-tinder:before {
	  content: "\ee2e";
	}
	
	.icon-fite:before {
	  content: "\ec2f";
	}
	
	.icon-ndr:before {
	  content: "\ed2f";
	}
	
	.icon-todoist:before {
	  content: "\ee2f";
	}
	
	.icon-filezilla:before {
	  content: "\ec30";
	}
	
	.icon-netapp:before {
	  content: "\ed30";
	}
	
	.icon-toggl:before {
	  content: "\ee30";
	}
	
	.icon-about-dot-me:before {
	  content: "\eb31";
	}
	
	.icon-fitbit:before {
	  content: "\ec31";
	}
	
	.icon-neovim:before {
	  content: "\ed31";
	}
	
	.icon-topcoder:before {
	  content: "\ee31";
	}
	
	.icon-500px:before {
	  content: "\eb32";
	}
	
	.icon-fiverr:before {
	  content: "\ec32";
	}
	
	.icon-netlify:before {
	  content: "\ed32";
	}
	
	.icon-toptal:before {
	  content: "\ee32";
	}
	
	.icon-1password:before {
	  content: "\eb33";
	}
	
	.icon-flattr:before {
	  content: "\ec33";
	}
	
	.icon-neo4j:before {
	  content: "\ed33";
	}
	
	.icon-tor:before {
	  content: "\ee33";
	}
	
	.icon-academia:before {
	  content: "\eb34";
	}
	
	.icon-flipboard:before {
	  content: "\ec34";
	}
	
	.icon-next-dot-js:before {
	  content: "\ed34";
	}
	
	.icon-trainerroad:before {
	  content: "\ee34";
	}
	
	.icon-acm:before {
	  content: "\eb35";
	}
	
	.icon-flickr:before {
	  content: "\ec35";
	}
	
	.icon-nextcloud:before {
	  content: "\ed35";
	}
	
	.icon-transportforireland:before {
	  content: "\ee35";
	}
	
	.icon-accusoft:before {
	  content: "\eb36";
	}
	
	.icon-floatplane:before {
	  content: "\ec36";
	}
	
	.icon-nextdoor:before {
	  content: "\ed36";
	}
	
	.icon-trakt:before {
	  content: "\ee36";
	}
	
	.icon-activision:before {
	  content: "\eb37";
	}
	
	.icon-flutter:before {
	  content: "\ec37";
	}
	
	.icon-newyorktimes:before {
	  content: "\ed37";
	}
	
	.icon-travisci:before {
	  content: "\ee37";
	}
	
	.icon-adobe:before {
	  content: "\eb38";
	}
	
	.icon-fnac:before {
	  content: "\ec38";
	}
	
	.icon-netflix:before {
	  content: "\ed38";
	}
	
	.icon-treehouse:before {
	  content: "\ee38";
	}
	
	.icon-addthis:before {
	  content: "\eb39";
	}
	
	.icon-formstack:before {
	  content: "\ec39";
	}
	
	.icon-nginx:before {
	  content: "\ed39";
	}
	
	.icon-trello:before {
	  content: "\ee39";
	}
	
	.icon-adobeacrobatreader:before {
	  content: "\eb3a";
	}
	
	.icon-fortinet:before {
	  content: "\ec3a";
	}
	
	.icon-nintendo:before {
	  content: "\ed3a";
	}
	
	.icon-trendmicro:before {
	  content: "\ee3a";
	}
	
	.icon-adobeaftereffects:before {
	  content: "\eb3b";
	}
	
	.icon-flask:before {
	  content: "\ec3b";
	}
	
	.icon-nintendo3ds:before {
	  content: "\ed3b";
	}
	
	.icon-tripadvisor:before {
	  content: "\ee3b";
	}
	
	.icon-adobeillustrator:before {
	  content: "\eb3c";
	}
	
	.icon-foursquare:before {
	  content: "\ec3c";
	}
	
	.icon-nintendogamecube:before {
	  content: "\ed3c";
	}
	
	.icon-trulia:before {
	  content: "\ee3c";
	}
	
	.icon-adobedreamweaver:before {
	  content: "\eb3d";
	}
	
	.icon-framer:before {
	  content: "\ec3d";
	}
	
	.icon-nintendoswitch:before {
	  content: "\ed3d";
	}
	
	.icon-trustpilot:before {
	  content: "\ee3d";
	}
	
	.icon-adobeindesign:before {
	  content: "\eb3e";
	}
	
	.icon-freelancer:before {
	  content: "\ec3e";
	}
	
	.icon-node-dot-js:before {
	  content: "\ed3e";
	}
	
	.icon-tumblr:before {
	  content: "\ee3e";
	}
	
	.icon-adobelightroomcc:before {
	  content: "\eb3f";
	}
	
	.icon-freebsd:before {
	  content: "\ec3f";
	}
	
	.icon-node-red:before {
	  content: "\ed3f";
	}
	
	.icon-turkishairlines:before {
	  content: "\ee3f";
	}
	
	.icon-adobelightroomclassic:before {
	  content: "\eb40";
	}
	
	.icon-freecodecamp:before {
	  content: "\ec40";
	}
	
	.icon-nodemon:before {
	  content: "\ed40";
	}
	
	.icon-twilio:before {
	  content: "\ee40";
	}
	
	.icon-actigraph:before {
	  content: "\eb41";
	}
	
	.icon-fossa:before {
	  content: "\ec41";
	}
	
	.icon-nokia:before {
	  content: "\ed41";
	}
	
	.icon-twitch:before {
	  content: "\ee41";
	}
	
	.icon-adobephotoshop:before {
	  content: "\eb42";
	}
	
	.icon-fujitsu:before {
	  content: "\ec42";
	}
	
	.icon-notion:before {
	  content: "\ed42";
	}
	
	.icon-twitter:before {
	  content: "\ee42";
	}
	
	.icon-adobephonegap:before {
	  content: "\eb43";
	}
	
	.icon-fujifilm:before {
	  content: "\ec43";
	}
	
	.icon-npm:before {
	  content: "\ed43";
	}
	
	.icon-twoo:before {
	  content: "\ee43";
	}
	
	.icon-adobetypekit:before {
	  content: "\eb44";
	}
	
	.icon-furrynetwork:before {
	  content: "\ec44";
	}
	
	.icon-notist:before {
	  content: "\ed44";
	}
	
	.icon-typo3:before {
	  content: "\ee44";
	}
	
	.icon-adobexd:before {
	  content: "\eb45";
	}
	
	.icon-furaffinity:before {
	  content: "\ec45";
	}
	
	.icon-nucleo:before {
	  content: "\ed45";
	}
	
	.icon-typescript:before {
	  content: "\ee45";
	}
	
	.icon-adobeaudition:before {
	  content: "\eb46";
	}
	
	.icon-gatsby:before {
	  content: "\ec46";
	}
	
	.icon-nuget:before {
	  content: "\ed46";
	}
	
	.icon-uber:before {
	  content: "\ee46";
	}
	
	.icon-adobecreativecloud:before {
	  content: "\eb47";
	}
	
	.icon-garmin:before {
	  content: "\ec47";
	}
	
	.icon-nuxt-dot-js:before {
	  content: "\ed47";
	}
	
	.icon-ubereats:before {
	  content: "\ee47";
	}
	
	.icon-adobepremiere:before {
	  content: "\eb48";
	}
	
	.icon-gauges:before {
	  content: "\ec48";
	}
	
	.icon-nvidia:before {
	  content: "\ed48";
	}
	
	.icon-ubisoft:before {
	  content: "\ee48";
	}
	
	.icon-airbus:before {
	  content: "\eb49";
	}
	
	.icon-gentoo:before {
	  content: "\ec49";
	}
	
	.icon-obsstudio:before {
	  content: "\ed49";
	}
	
	.icon-ubuntu:before {
	  content: "\ee49";
	}
	
	.icon-aiqfome:before {
	  content: "\eb4a";
	}
	
	.icon-git:before {
	  content: "\ec4a";
	}
	
	.icon-ocaml:before {
	  content: "\ed4a";
	}
	
	.icon-udacity:before {
	  content: "\ee4a";
	}
	
	.icon-airtable:before {
	  content: "\eb4b";
	}
	
	.icon-geocaching:before {
	  content: "\ec4b";
	}
	
	.icon-octave:before {
	  content: "\ed4b";
	}
	
	.icon-udemy:before {
	  content: "\ee4b";
	}
	
	.icon-alipay:before {
	  content: "\eb4c";
	}
	
	.icon-ghost:before {
	  content: "\ec4c";
	}
	
	.icon-octopusdeploy:before {
	  content: "\ed4c";
	}
	
	.icon-uikit:before {
	  content: "\ee4c";
	}
	
	.icon-airbnb:before {
	  content: "\eb4d";
	}
	
	.icon-github:before {
	  content: "\ec4d";
	}
	
	.icon-oculus:before {
	  content: "\ed4d";
	}
	
	.icon-unsplash:before {
	  content: "\ee4d";
	}
	
	.icon-amazonalexa:before {
	  content: "\eb4e";
	}
	
	.icon-gerrit:before {
	  content: "\ec4e";
	}
	
	.icon-odnoklassniki:before {
	  content: "\ed4e";
	}
	
	.icon-unity:before {
	  content: "\ee4e";
	}
	
	.icon-allocine:before {
	  content: "\eb4f";
	}
	
	.icon-gitea:before {
	  content: "\ec4f";
	}
	
	.icon-opel:before {
	  content: "\ed4f";
	}
	
	.icon-umbraco:before {
	  content: "\ee4f";
	}
	
	.icon-amazon:before {
	  content: "\eb50";
	}
	
	.icon-gitpod:before {
	  content: "\ec50";
	}
	
	.icon-openaccess:before {
	  content: "\ed50";
	}
	
	.icon-unrealengine:before {
	  content: "\ee50";
	}
	
	.icon-amazonaws:before {
	  content: "\eb51";
	}
	
	.icon-gitter:before {
	  content: "\ec51";
	}
	
	.icon-opencollective:before {
	  content: "\ed51";
	}
	
	.icon-v:before {
	  content: "\ee51";
	}
	
	.icon-amd:before {
	  content: "\eb52";
	}
	
	.icon-glassdoor:before {
	  content: "\ec52";
	}
	
	.icon-openid:before {
	  content: "\ed52";
	}
	
	.icon-upwork:before {
	  content: "\ee52";
	}
	
	.icon-android:before {
	  content: "\eb53";
	}
	
	.icon-gmail:before {
	  content: "\ec53";
	}
	
	.icon-opensourceinitiative:before {
	  content: "\ed53";
	}
	
	.icon-untappd:before {
	  content: "\ee53";
	}
	
	.icon-angular:before {
	  content: "\eb54";
	}
	
	.icon-glitch:before {
	  content: "\ec54";
	}
	
	.icon-openstreetmap:before {
	  content: "\ed54";
	}
	
	.icon-vagrant:before {
	  content: "\ee54";
	}
	
	.icon-anaconda:before {
	  content: "\eb55";
	}
	
	.icon-gnuemacs:before {
	  content: "\ec55";
	}
	
	.icon-openssl:before {
	  content: "\ed55";
	}
	
	.icon-v8:before {
	  content: "\ee55";
	}
	
	.icon-angularjs:before {
	  content: "\eb56";
	}
	
	.icon-gnubash:before {
	  content: "\ec56";
	}
	
	.icon-openvpn:before {
	  content: "\ed56";
	}
	
	.icon-valve:before {
	  content: "\ee56";
	}
	
	.icon-angellist:before {
	  content: "\eb57";
	}
	
	.icon-gnuicecat:before {
	  content: "\ec57";
	}
	
	.icon-opensuse:before {
	  content: "\ed57";
	}
	
	.icon-venmo:before {
	  content: "\ee57";
	}
	
	.icon-ansible:before {
	  content: "\eb58";
	}
	
	.icon-go:before {
	  content: "\ec58";
	}
	
	.icon-opera:before {
	  content: "\ed58";
	}
	
	.icon-verizon:before {
	  content: "\ee58";
	}
	
	.icon-americanexpress:before {
	  content: "\eb59";
	}
	
	.icon-gog-dot-com:before {
	  content: "\ec59";
	}
	
	.icon-opsgenie:before {
	  content: "\ed59";
	}
	
	.icon-viadeo:before {
	  content: "\ee59";
	}
	
	.icon-angularuniversal:before {
	  content: "\eb5a";
	}
	
	.icon-godotengine:before {
	  content: "\ec5a";
	}
	
	.icon-oracle:before {
	  content: "\ed5a";
	}
	
	.icon-viber:before {
	  content: "\ee5a";
	}
	
	.icon-apachecordova:before {
	  content: "\eb5b";
	}
	
	.icon-goldenline:before {
	  content: "\ec5b";
	}
	
	.icon-opslevel:before {
	  content: "\ed5b";
	}
	
	.icon-vim:before {
	  content: "\ee5b";
	}
	
	.icon-apache:before {
	  content: "\eb5c";
	}
	
	.icon-gnuprivacyguard:before {
	  content: "\ec5c";
	}
	
	.icon-origin:before {
	  content: "\ed5c";
	}
	
	.icon-vimeo:before {
	  content: "\ee5c";
	}
	
	.icon-amazonlumberyard:before {
	  content: "\eb5d";
	}
	
	.icon-googledrive:before {
	  content: "\ec5d";
	}
	
	.icon-orcid:before {
	  content: "\ed5d";
	}
	
	.icon-vine:before {
	  content: "\ee5d";
	}
	
	.icon-apacheant:before {
	  content: "\eb5e";
	}
	
	.icon-googlecloud:before {
	  content: "\ec5e";
	}
	
	.icon-osmc:before {
	  content: "\ed5e";
	}
	
	.icon-virb:before {
	  content: "\ee5e";
	}
	
	.icon-apachekafka:before {
	  content: "\eb5f";
	}
	
	.icon-goodreads:before {
	  content: "\ec5f";
	}
	
	.icon-overcast:before {
	  content: "\ed5f";
	}
	
	.icon-visa:before {
	  content: "\ee5f";
	}
	
	.icon-apacherocketmq:before {
	  content: "\eb60";
	}
	
	.icon-googleanalytics:before {
	  content: "\ec60";
	}
	
	.icon-palantir:before {
	  content: "\ed60";
	}
	
	.icon-visualstudio:before {
	  content: "\ee60";
	}
	
	.icon-applemusic:before {
	  content: "\eb61";
	}
	
	.icon-googlechrome:before {
	  content: "\ec61";
	}
	
	.icon-ovh:before {
	  content: "\ed61";
	}
	
	.icon-visualstudiocode:before {
	  content: "\ee61";
	}
	
	.icon-applepay:before {
	  content: "\eb62";
	}
	
	.icon-gnu:before {
	  content: "\ec62";
	}
	
	.icon-pagekit:before {
	  content: "\ed62";
	}
	
	.icon-vk:before {
	  content: "\ee62";
	}
	
	.icon-archlinux:before {
	  content: "\eb63";
	}
	
	.icon-googlehangouts:before {
	  content: "\ec63";
	}
	
	.icon-pandora:before {
	  content: "\ed63";
	}
	
	.icon-vlcmediaplayer:before {
	  content: "\ee63";
	}
	
	.icon-aral:before {
	  content: "\eb64";
	}
	
	.icon-gnusocial:before {
	  content: "\ec64";
	}
	
	.icon-paloaltosoftware:before {
	  content: "\ed64";
	}
	
	.icon-vodafone:before {
	  content: "\ee64";
	}
	
	.icon-artstation:before {
	  content: "\eb65";
	}
	
	.icon-googlekeep:before {
	  content: "\ec65";
	}
	
	.icon-paritysubstrate:before {
	  content: "\ed65";
	}
	
	.icon-volkswagen:before {
	  content: "\ee65";
	}
	
	.icon-asana:before {
	  content: "\eb66";
	}
	
	.icon-google:before {
	  content: "\ec66";
	}
	
	.icon-patreon:before {
	  content: "\ed66";
	}
	
	.icon-vue-dot-js:before {
	  content: "\ee66";
	}
	
	.icon-archiveofourown:before {
	  content: "\eb67";
	}
	
	.icon-googlehangoutschat:before {
	  content: "\ec67";
	}
	
	.icon-pantheon:before {
	  content: "\ed67";
	}
	
	.icon-vsco:before {
	  content: "\ee67";
	}
	
	.icon-asciinema:before {
	  content: "\eb68";
	}
	
	.icon-googlelens:before {
	  content: "\ec68";
	}
	
	.icon-peertube:before {
	  content: "\ed68";
	}
	
	.icon-w3c:before {
	  content: "\ee68";
	}
	
	.icon-arduino:before {
	  content: "\eb69";
	}
	
	.icon-googlemaps:before {
	  content: "\ec69";
	}
	
	.icon-paypal:before {
	  content: "\ed69";
	}
	
	.icon-wattpad:before {
	  content: "\ee69";
	}
	
	.icon-asciidoctor:before {
	  content: "\eb6a";
	}
	
	.icon-googlepay:before {
	  content: "\ec6a";
	}
	
	.icon-periscope:before {
	  content: "\ed6a";
	}
	
	.icon-weasyl:before {
	  content: "\ee6a";
	}
	
	.icon-appveyor:before {
	  content: "\eb6b";
	}
	
	.icon-googlepodcasts:before {
	  content: "\ec6b";
	}
	
	.icon-parse-dot-ly:before {
	  content: "\ed6b";
	}
	
	.icon-webassembly:before {
	  content: "\ee6b";
	}
	
	.icon-atlassian:before {
	  content: "\eb6c";
	}
	
	.icon-googleplay:before {
	  content: "\ec6c";
	}
	
	.icon-photocrowd:before {
	  content: "\ed6c";
	}
	
	.icon-webcomponents-dot-org:before {
	  content: "\ee6c";
	}
	
	.icon-at-and-t:before {
	  content: "\eb6d";
	}
	
	.icon-googlescholar:before {
	  content: "\ec6d";
	}
	
	.icon-php:before {
	  content: "\ed6d";
	}
	
	.icon-webmin:before {
	  content: "\ee6d";
	}
	
	.icon-atom:before {
	  content: "\eb6e";
	}
	
	.icon-gradle:before {
	  content: "\ec6e";
	}
	
	.icon-pi-hole:before {
	  content: "\ed6e";
	}
	
	.icon-webpack:before {
	  content: "\ee6e";
	}
	
	.icon-audible:before {
	  content: "\eb6f";
	}
	
	.icon-gov-dot-uk:before {
	  content: "\ec6f";
	}
	
	.icon-picarto-dot-tv:before {
	  content: "\ed6f";
	}
	
	.icon-webstorm:before {
	  content: "\ee6f";
	}
	
	.icon-audi:before {
	  content: "\eb70";
	}
	
	.icon-graphcool:before {
	  content: "\ec70";
	}
	
	.icon-pinboard:before {
	  content: "\ed70";
	}
	
	.icon-wechat:before {
	  content: "\ee70";
	}
	
	.icon-aurelia:before {
	  content: "\eb71";
	}
	
	.icon-grafana:before {
	  content: "\ec71";
	}
	
	.icon-pingdom:before {
	  content: "\ed71";
	}
	
	.icon-whatsapp:before {
	  content: "\ee71";
	}
	
	.icon-auth0:before {
	  content: "\eb72";
	}
	
	.icon-graphql:before {
	  content: "\ec72";
	}
	
	.icon-pingup:before {
	  content: "\ed72";
	}
	
	.icon-wheniwork:before {
	  content: "\ee72";
	}
	
	.icon-automatic:before {
	  content: "\eb73";
	}
	
	.icon-gravatar:before {
	  content: "\ec73";
	}
	
	.icon-pinterest:before {
	  content: "\ed73";
	}
	
	.icon-wii:before {
	  content: "\ee73";
	}
	
	.icon-authy:before {
	  content: "\eb74";
	}
	
	.icon-grav:before {
	  content: "\ec74";
	}
	
	.icon-pivotaltracker:before {
	  content: "\ed74";
	}
	
	.icon-wiiu:before {
	  content: "\ee74";
	}
	
	.icon-aventrix:before {
	  content: "\eb75";
	}
	
	.icon-greenkeeper:before {
	  content: "\ec75";
	}
	
	.icon-plangrid:before {
	  content: "\ed75";
	}
	
	.icon-wikipedia:before {
	  content: "\ee75";
	}
	
	.icon-awesomewm:before {
	  content: "\eb76";
	}
	
	.icon-groupon:before {
	  content: "\ec76";
	}
	
	.icon-player-dot-me:before {
	  content: "\ed76";
	}
	
	.icon-windows:before {
	  content: "\ee76";
	}
	
	.icon-azureartifacts:before {
	  content: "\eb77";
	}
	
	.icon-groovy:before {
	  content: "\ec77";
	}
	
	.icon-playstation:before {
	  content: "\ed77";
	}
	
	.icon-wire:before {
	  content: "\ee77";
	}
	
	.icon-autotask:before {
	  content: "\eb78";
	}
	
	.icon-gumroad:before {
	  content: "\ec78";
	}
	
	.icon-playstation4:before {
	  content: "\ed78";
	}
	
	.icon-wireguard:before {
	  content: "\ee78";
	}
	
	.icon-azurepipelines:before {
	  content: "\eb79";
	}
	
	.icon-gulp:before {
	  content: "\ec79";
	}
	
	.icon-playstation3:before {
	  content: "\ed79";
	}
	
	.icon-wish:before {
	  content: "\ee79";
	}
	
	.icon-apacheflink:before {
	  content: "\eb7a";
	}
	
	.icon-gumtree:before {
	  content: "\ec7a";
	}
	
	.icon-plex:before {
	  content: "\ed7a";
	}
	
	.icon-wix:before {
	  content: "\ee7a";
	}
	
	.icon-baidu:before {
	  content: "\eb7b";
	}
	
	.icon-habr:before {
	  content: "\ec7b";
	}
	
	.icon-pluralsight:before {
	  content: "\ed7b";
	}
	
	.icon-wpengine:before {
	  content: "\ee7b";
	}
	
	.icon-bancontact:before {
	  content: "\eb7c";
	}
	
	.icon-hackerone:before {
	  content: "\ec7c";
	}
	
	.icon-plurk:before {
	  content: "\ed7c";
	}
	
	.icon-wolfram:before {
	  content: "\ee7c";
	}
	
	.icon-bandcamp:before {
	  content: "\eb7d";
	}
	
	.icon-hackerearth:before {
	  content: "\ec7d";
	}
	
	.icon-pocket:before {
	  content: "\ed7d";
	}
	
	.icon-x-pack:before {
	  content: "\ee7d";
	}
	
	.icon-bamboo:before {
	  content: "\eb7e";
	}
	
	.icon-hackaday:before {
	  content: "\ec7e";
	}
	
	.icon-pocketcasts:before {
	  content: "\ed7e";
	}
	
	.icon-x-dot-org:before {
	  content: "\ee7e";
	}
	
	.icon-basecamp:before {
	  content: "\eb7f";
	}
	
	.icon-greensock:before {
	  content: "\ec7f";
	}
	
	.icon-polymerproject:before {
	  content: "\ed7f";
	}
	
	.icon-write-dot-as:before {
	  content: "\ee7f";
	}
	
	.icon-bandsintown:before {
	  content: "\eb80";
	}
	
	.icon-hackhands:before {
	  content: "\ec80";
	}
	
	.icon-postman:before {
	  content: "\ed80";
	}
	
	.icon-wordpress:before {
	  content: "\ee80";
	}
	
	.icon-apple:before {
	  content: "\eb81";
	}
	
	.icon-hackster:before {
	  content: "\ec81";
	}
	
	.icon-postgresql:before {
	  content: "\ed81";
	}
	
	.icon-wolframmathematica:before {
	  content: "\ee81";
	}
	
	.icon-azuredevops:before {
	  content: "\eb82";
	}
	
	.icon-hackerrank:before {
	  content: "\ec82";
	}
	
	.icon-powershell:before {
	  content: "\ed82";
	}
	
	.icon-wolframlanguage:before {
	  content: "\ee82";
	}
	
	.icon-bathasu:before {
	  content: "\eb83";
	}
	
	.icon-happycow:before {
	  content: "\ec83";
	}
	
	.icon-prettier:before {
	  content: "\ed83";
	}
	
	.icon-xampp:before {
	  content: "\ee83";
	}
	
	.icon-bandlab:before {
	  content: "\eb84";
	}
	
	.icon-hashnode:before {
	  content: "\ec84";
	}
	
	.icon-prismic:before {
	  content: "\ed84";
	}
	
	.icon-xcode:before {
	  content: "\ee84";
	}
	
	.icon-beats:before {
	  content: "\eb85";
	}
	
	.icon-haskell:before {
	  content: "\ec85";
	}
	
	.icon-probot:before {
	  content: "\ed85";
	}
	
	.icon-xiaomi:before {
	  content: "\ee85";
	}
	
	.icon-bigcartel:before {
	  content: "\eb86";
	}
	
	.icon-haxe:before {
	  content: "\ec86";
	}
	
	.icon-processwire:before {
	  content: "\ed86";
	}
	
	.icon-xbox:before {
	  content: "\ee86";
	}
	
	.icon-behance:before {
	  content: "\eb87";
	}
	
	.icon-hatenabookmark:before {
	  content: "\ec87";
	}
	
	.icon-producthunt:before {
	  content: "\ed87";
	}
	
	.icon-xero:before {
	  content: "\ee87";
	}
	
	.icon-bing:before {
	  content: "\eb88";
	}
	
	.icon-hexo:before {
	  content: "\ec88";
	}
	
	.icon-proto-dot-io:before {
	  content: "\ed88";
	}
	
	.icon-xing:before {
	  content: "\ee88";
	}
	
	.icon-bitbucket:before {
	  content: "\eb89";
	}
	
	.icon-heroku:before {
	  content: "\ec89";
	}
	
	.icon-protonmail:before {
	  content: "\ed89";
	}
	
	.icon-xmpp:before {
	  content: "\ee89";
	}
	
	.icon-bit:before {
	  content: "\eb8a";
	}
	
	.icon-highly:before {
	  content: "\ec8a";
	}
	
	.icon-proxmox:before {
	  content: "\ed8a";
	}
	
	.icon-xsplit:before {
	  content: "\ee8a";
	}
	
	.icon-bitcoin:before {
	  content: "\eb8b";
	}
	
	.icon-here:before {
	  content: "\ec8b";
	}
	
	.icon-pypi:before {
	  content: "\ed8b";
	}
	
	.icon-yahoo:before {
	  content: "\ee8b";
	}
	
	.icon-bitdefender:before {
	  content: "\eb8c";
	}
	
	.icon-gutenberg:before {
	  content: "\ec8c";
	}
	
	.icon-python:before {
	  content: "\ed8c";
	}
	
	.icon-yammer:before {
	  content: "\ee8c";
	}
	
	.icon-bitly:before {
	  content: "\eb8d";
	}
	
	.icon-hipchat:before {
	  content: "\ec8d";
	}
	
	.icon-pytorch:before {
	  content: "\ed8d";
	}
	
	.icon-yandex:before {
	  content: "\ee8d";
	}
	
	.icon-bitrise:before {
	  content: "\eb8e";
	}
	
	.icon-helm:before {
	  content: "\ec8e";
	}
	
	.icon-pyup:before {
	  content: "\ed8e";
	}
	
	.icon-ycombinator:before {
	  content: "\ee8e";
	}
	
	.icon-blackberry:before {
	  content: "\eb8f";
	}
	
	.icon-hockeyapp:before {
	  content: "\ec8f";
	}
	
	.icon-qgis:before {
	  content: "\ed8f";
	}
	
	.icon-yelp:before {
	  content: "\ee8f";
	}
	
	.icon-blogger:before {
	  content: "\eb90";
	}
	
	.icon-homify:before {
	  content: "\ec90";
	}
	
	.icon-qiita:before {
	  content: "\ed90";
	}
	
	.icon-yarn:before {
	  content: "\ee90";
	}
	
	.icon-blender:before {
	  content: "\eb91";
	}
	
	.icon-houzz:before {
	  content: "\ec91";
	}
	
	.icon-qualcomm:before {
	  content: "\ed91";
	}
	
	.icon-youtube:before {
	  content: "\ee91";
	}
	
	.icon-bmcsoftware:before {
	  content: "\eb92";
	}
	
	.icon-hootsuite:before {
	  content: "\ec92";
	}
	
	.icon-qualtrics:before {
	  content: "\ed92";
	}
	
	.icon-zalando:before {
	  content: "\ee92";
	}
	
	.icon-bluetooth:before {
	  content: "\eb93";
	}
	
	.icon-hp:before {
	  content: "\ec93";
	}
	
	.icon-quantcast:before {
	  content: "\ed93";
	}
	
	.icon-zapier:before {
	  content: "\ee93";
	}
	
	.icon-boeing:before {
	  content: "\eb94";
	}
	
	.icon-html5:before {
	  content: "\ec94";
	}
	
	.icon-quantopian:before {
	  content: "\ed94";
	}
	
	.icon-zeit:before {
	  content: "\ee94";
	}
	
	.icon-boost:before {
	  content: "\eb95";
	}
	
	.icon-htmlacademy:before {
	  content: "\ec95";
	}
	
	.icon-quarkus:before {
	  content: "\ed95";
	}
	
	.icon-zdf:before {
	  content: "\ee95";
	}
	
	.icon-babel:before {
	  content: "\eb96";
	}
	
	.icon-huawei:before {
	  content: "\ec96";
	}
	
	.icon-quicktime:before {
	  content: "\ed96";
	}
	
	.icon-zendesk:before {
	  content: "\ee96";
	}
	
	.icon-bootstrap:before {
	  content: "\eb97";
	}
	
	.icon-hubspot:before {
	  content: "\ec97";
	}
	
	.icon-quora:before {
	  content: "\ed97";
	}
	
	.icon-zendframework:before {
	  content: "\ee97";
	}
	
	.icon-brand-dot-ai:before {
	  content: "\eb98";
	}
	
	.icon-hulu:before {
	  content: "\ec98";
	}
	
	.icon-qwiklabs:before {
	  content: "\ed98";
	}
	
	.icon-zeromq:before {
	  content: "\ee98";
	}
	
	.icon-bower:before {
	  content: "\eb99";
	}
	
	.icon-humblebundle:before {
	  content: "\ec99";
	}
	
	.icon-qzone:before {
	  content: "\ed99";
	}
	
	.icon-zerply:before {
	  content: "\ee99";
	}
	
	.icon-brandfolder:before {
	  content: "\eb9a";
	}
	
	.icon-hurriyetemlak:before {
	  content: "\ec9a";
	}
	
	.icon-r:before {
	  content: "\ed9a";
	}
	
	.icon-zillow:before {
	  content: "\ee9a";
	}
	
	.icon-broadcom:before {
	  content: "\eb9b";
	}
	
	.icon-hypothesis:before {
	  content: "\ec9b";
	}
	
	.icon-rabbitmq:before {
	  content: "\ed9b";
	}
	
	.icon-zorin:before {
	  content: "\ee9b";
	}
	
	.icon-buddy:before {
	  content: "\eb9c";
	}
	
	.icon-iata:before {
	  content: "\ec9c";
	}
	
	.icon-radiopublic:before {
	  content: "\ed9c";
	}
	
	.icon-zoom:before {
	  content: "\ee9c";
	}
	
	.icon-buffer:before {
	  content: "\eb9d";
	}
	
	.icon-icomoon:before {
	  content: "\ec9d";
	}
	
	.icon-rails:before {
	  content: "\ed9d";
	}
	
	.icon-zulip:before {
	  content: "\ee9d";
	}
	
	.icon-buymeacoffee:before {
	  content: "\eb9e";
	}
	
	.icon-icloud:before {
	  content: "\ec9e";
	}
	
	.icon-react:before {
	  content: "\ed9e";
	}
	
	.icon-abstract:before {
	  content: "\ee9e";
	}
	
	.icon-bulma:before {
	  content: "\eb9f";
	}
	
	.icon-iconjar:before {
	  content: "\ec9f";
	}
	
	.icon-raspberrypi:before {
	  content: "\ed9f";
	}
	
	.icon-abbrobotstudio:before {
	  content: "\ee9f";
	}
	
	.icon-breaker:before {
	  content: "\eba0";
	}
	
	.icon-ideal:before {
	  content: "\eca0";
	}
	
	.icon-readthedocs:before {
	  content: "\eda0";
	}
	
	.icon-algolia:before {
	  content: "\eea0";
	}
	
	.icon-buzzfeed:before {
	  content: "\eba1";
	}
	
	.icon-ifixit:before {
	  content: "\eca1";
	}
	
	.icon-reason:before {
	  content: "\eda1";
	}
	
	.icon-airplayvideo:before {
	  content: "\eea1";
	}
	
	.icon-c:before {
	  content: "\eba2";
	}
	
	.icon-icq:before {
	  content: "\eca2";
	}
	
	.icon-realm:before {
	  content: "\eda2";
	}
	
	.icon-adguard:before {
	  content: "\eea2";
	}
	
	.icon-campaignmonitor:before {
	  content: "\eba3";
	}
	
	.icon-imdb:before {
	  content: "\eca3";
	}
	
	.icon-reasonstudios:before {
	  content: "\eda3";
	}
	
	.icon-airplayaudio:before {
	  content: "\eea3";
	}
	
	.icon-cakephp:before {
	  content: "\eba4";
	}
	
	.icon-instacart:before {
	  content: "\eca4";
	}
	
	.icon-redbubble:before {
	  content: "\eda4";
	}
	
	.icon-beatsbydre:before {
	  content: "\eea4";
	}
	
	.icon-cashapp:before {
	  content: "\eba5";
	}
	
	.icon-inkscape:before {
	  content: "\eca5";
	}
	
	.icon-reddit:before {
	  content: "\eda5";
	}
	
	.icon-apacheopenoffice:before {
	  content: "\eea5";
	}
	
	.icon-canva:before {
	  content: "\eba6";
	}
	
	.icon-instagram:before {
	  content: "\eca6";
	}
	
	.icon-redhat:before {
	  content: "\eda6";
	}
	
	.icon-apachespark:before {
	  content: "\eea6";
	}
	
	.icon-castorama:before {
	  content: "\eba7";
	}
	
	.icon-instapaper:before {
	  content: "\eca7";
	}
	
	.icon-redhatopenshift:before {
	  content: "\eda7";
	}
	
	.icon-castro:before {
	  content: "\eba8";
	}
	
	.icon-intel:before {
	  content: "\eca8";
	}
	
	.icon-redis:before {
	  content: "\eda8";
	}
	
	.icon-celery:before {
	  content: "\eba9";
	}
	
	.icon-intercom:before {
	  content: "\eca9";
	}
	
	.icon-redux:before {
	  content: "\eda9";
	}
	
	.icon-cevo:before {
	  content: "\ebaa";
	}
	
	.icon-intellijidea:before {
	  content: "\ecaa";
	}
	
	.icon-renren:before {
	  content: "\edaa";
	}
	
	.icon-centos:before {
	  content: "\ebab";
	}
	
	.icon-internetarchive:before {
	  content: "\ecab";
	}
	
	.icon-researchgate:before {
	  content: "\edab";
	}
	
	.icon-cdprojekt:before {
	  content: "\ebac";
	}
	
	.icon-internetexplorer:before {
	  content: "\ecac";
	}
	
	.icon-reverbnation:before {
	  content: "\edac";
	}
	
	.icon-chartmogul:before {
	  content: "\ebad";
	}
	
	.icon-invision:before {
	  content: "\ecad";
	}
	
	.icon-rhinoceros:before {
	  content: "\edad";
	}
	
	.icon-chef:before {
	  content: "\ebae";
	}
	
	.icon-ios:before {
	  content: "\ecae";
	}
	
	.icon-riot:before {
	  content: "\edae";
	}
	
	.icon-chase:before {
	  content: "\ebaf";
	}
	
	.icon-ionic:before {
	  content: "\ecaf";
	}
	
	.icon-riseup:before {
	  content: "\edaf";
	}
	
	.icon-circle:before {
	  content: "\ebb0";
	}
	
	.icon-issuu:before {
	  content: "\ecb0";
	}
	
	.icon-rollup-dot-js:before {
	  content: "\edb0";
	}
	
	.icon-circleci:before {
	  content: "\ebb1";
	}
	
	.icon-itch-dot-io:before {
	  content: "\ecb1";
	}
	
	.icon-roots:before {
	  content: "\edb1";
	}
	
	.icon-cassandra:before {
	  content: "\ebb2";
	}
	
	.icon-itunes:before {
	  content: "\ecb2";
	}
	
	.icon-roundcube:before {
	  content: "\edb2";
	}
	
	.icon-cirrusci:before {
	  content: "\ebb3";
	}
	
	.icon-jabber:before {
	  content: "\ecb3";
	}
	
	.icon-rss:before {
	  content: "\edb3";
	}
	
	.icon-citrix:before {
	  content: "\ebb4";
	}
	
	.icon-javascript:before {
	  content: "\ecb4";
	}
	
	.icon-rstudio:before {
	  content: "\edb4";
	}
	
	.icon-clockify:before {
	  content: "\ebb5";
	}
	
	.icon-java:before {
	  content: "\ecb5";
	}
	
	.icon-rtlzwei:before {
	  content: "\edb5";
	}
	
	.icon-civicrm:before {
	  content: "\ebb6";
	}
	
	.icon-jekyll:before {
	  content: "\ecb6";
	}
	
	.icon-ruby:before {
	  content: "\edb6";
	}
	
	.icon-clojure:before {
	  content: "\ebb7";
	}
	
	.icon-jenkins:before {
	  content: "\ecb7";
	}
	
	.icon-rubygems:before {
	  content: "\edb7";
	}
	
	.icon-cloudbees:before {
	  content: "\ebb8";
	}
	
	.icon-jet:before {
	  content: "\ecb8";
	}
	
	.icon-runkeeper:before {
	  content: "\edb8";
	}
	
	.icon-cloudflare:before {
	  content: "\ebb9";
	}
	
	.icon-jetbrains:before {
	  content: "\ecb9";
	}
	
	.icon-sahibinden:before {
	  content: "\edb9";
	}
	
	.icon-cmake:before {
	  content: "\ebba";
	}
	
	.icon-jest:before {
	  content: "\ecba";
	}
	
	.icon-safari:before {
	  content: "\edba";
	}
	
	.icon-co-op:before {
	  content: "\ebbb";
	}
	
	.icon-jira:before {
	  content: "\ecbb";
	}
	
	.icon-salesforce:before {
	  content: "\edbb";
	}
	
	.icon-codecademy:before {
	  content: "\ebbc";
	}
	
	.icon-joomla:before {
	  content: "\ecbc";
	}
	
	.icon-rust:before {
	  content: "\edbc";
	}
	
	.icon-codacy:before {
	  content: "\ebbd";
	}
	
	.icon-jquery:before {
	  content: "\ecbd";
	}
	
	.icon-samsung:before {
	  content: "\edbd";
	}
	
	.icon-codeclimate:before {
	  content: "\ebbe";
	}
	
	.icon-jsdelivr:before {
	  content: "\ecbe";
	}
	
	.icon-samsungpay:before {
	  content: "\edbe";
	}
	
	.icon-codefactor:before {
	  content: "\ebbf";
	}
	
	.icon-jupyter:before {
	  content: "\ecbf";
	}
	
	.icon-sap:before {
	  content: "\edbf";
	}
	
	.icon-codeforces:before {
	  content: "\ebc0";
	}
	
	.icon-json:before {
	  content: "\ecc0";
	}
	
	.icon-sass:before {
	  content: "\edc0";
	}
	
	.icon-codecov:before {
	  content: "\ebc1";
	}
	
	.icon-justeat:before {
	  content: "\ecc1";
	}
	
	.icon-sat-dot-1:before {
	  content: "\edc1";
	}
	
	.icon-codeigniter:before {
	  content: "\ebc2";
	}
	
	.icon-justgiving:before {
	  content: "\ecc2";
	}
	
	.icon-scala:before {
	  content: "\edc2";
	}
	
	.icon-coderwall:before {
	  content: "\ebc3";
	}
	
	.icon-kaggle:before {
	  content: "\ecc3";
	}
	
	.icon-saucelabs:before {
	  content: "\edc3";
	}
	
	.icon-codesandbox:before {
	  content: "\ebc4";
	}
	
	.icon-kaios:before {
	  content: "\ecc4";
	}
	
	.icon-scaleway:before {
	  content: "\edc4";
	}
	
	.icon-codeship:before {
	  content: "\ebc5";
	}
	
	.icon-kaspersky:before {
	  content: "\ecc5";
	}
	
	.icon-scribd:before {
	  content: "\edc5";
	}
	
	.icon-codepen:before {
	  content: "\ebc6";
	}
	
	.icon-keepassxc:before {
	  content: "\ecc6";
	}
	
	.icon-scrutinizerci:before {
	  content: "\edc6";
	}
	
	.icon-codio:before {
	  content: "\ebc7";
	}
	
	.icon-kentico:before {
	  content: "\ecc7";
	}
	
	.icon-seagate:before {
	  content: "\edc7";
	}
	
	.icon-coffeescript:before {
	  content: "\ebc8";
	}
	
	.icon-keybase:before {
	  content: "\ecc8";
	}
	
	.icon-sega:before {
	  content: "\edc8";
	}
	
	.icon-coinbase:before {
	  content: "\ebc9";
	}
	
	.icon-keras:before {
	  content: "\ecc9";
	}
	
	.icon-sellfy:before {
	  content: "\edc9";
	}
	
	.icon-codewars:before {
	  content: "\ebca";
	}
	
	.icon-khanacademy:before {
	  content: "\ecca";
	}
	
	.icon-semanticweb:before {
	  content: "\edca";
	}
	
	.icon-commonworkflowlanguage:before {
	  content: "\ebcb";
	}
	
	.icon-kibana:before {
	  content: "\eccb";
	}
	
	.icon-sencha:before {
	  content: "\edcb";
	}
	
	.icon-compropago:before {
	  content: "\ebcc";
	}
	
	.icon-keycdn:before {
	  content: "\eccc";
	}
	
	.icon-sensu:before {
	  content: "\edcc";
	}
	
	.icon-conda-forge:before {
	  content: "\ebcd";
	}
	
	.icon-kickstarter:before {
	  content: "\eccd";
	}
	
	.icon-sentry:before {
	  content: "\edcd";
	}
	
	.icon-conekta:before {
	  content: "\ebce";
	}
	
	.icon-kirby:before {
	  content: "\ecce";
	}
	
	.icon-serverfault:before {
	  content: "\edce";
	}
	
	.icon-confluence:before {
	  content: "\ebcf";
	}
	
	.icon-kik:before {
	  content: "\eccf";
	}
	
	.icon-shazam:before {
	  content: "\edcf";
	}
	
	.icon-coronaengine:before {
	  content: "\ebd0";
	}
	
	.icon-known:before {
	  content: "\ecd0";
	}
	
	.icon-shell:before {
	  content: "\edd0";
	}
	
	.icon-coronarenderer:before {
	  content: "\ebd1";
	}
	
	.icon-klout:before {
	  content: "\ecd1";
	}
	
	.icon-shopify:before {
	  content: "\edd1";
	}
	
	.icon-coursera:before {
	  content: "\ebd2";
	}
	
	.icon-ko-fi:before {
	  content: "\ecd2";
	}
	
	.icon-showpad:before {
	  content: "\edd2";
	}
	
	.icon-cplusplus:before {
	  content: "\ebd3";
	}
	
	.icon-kodi:before {
	  content: "\ecd3";
	}
	
	.icon-siemens:before {
	  content: "\edd3";
	}
	
	.icon-crehana:before {
	  content: "\ebd4";
	}
	
	.icon-koding:before {
	  content: "\ecd4";
	}
	
	.icon-signal:before {
	  content: "\edd4";
	}
	
	.icon-crunchbase:before {
	  content: "\ebd5";
	}
	
	.icon-kotlin:before {
	  content: "\ecd5";
	}
	
	.icon-simpleicons:before {
	  content: "\edd5";
	}
	
	.icon-crunchyroll:before {
	  content: "\ebd6";
	}
	
	.icon-kyocera:before {
	  content: "\ecd6";
	}
	
	.icon-sinaweibo:before {
	  content: "\edd6";
	}
	
	.icon-creativecommons:before {
	  content: "\ebd7";
	}
	
	.icon-kubernetes:before {
	  content: "\ecd7";
	}
	
	.icon-sitepoint:before {
	  content: "\edd7";
	}
	
	.icon-cryengine:before {
	  content: "\ebd8";
	}
	
	.icon-laravel:before {
	  content: "\ecd8";
	}
	
	.icon-sketch:before {
	  content: "\edd8";
	}
	
	.icon-curl:before {
	  content: "\ebd9";
	}
	
	.icon-laravelhorizon:before {
	  content: "\ecd9";
	}
	
	.icon-skillshare:before {
	  content: "\edd9";
	}
	
	.icon-dailymotion:before {
	  content: "\ebda";
	}
	
	.icon-laravelnova:before {
	  content: "\ecda";
	}
	
	.icon-skyliner:before {
	  content: "\edda";
	}
	
	.icon-d3-dot-js:before {
	  content: "\ebdb";
	}
	
	.icon-last-dot-fm:before {
	  content: "\ecdb";
	}
	
	.icon-skype:before {
	  content: "\eddb";
	}
	
	.icon-csswizardry:before {
	  content: "\ebdc";
	}
	
	.icon-lastpass:before {
	  content: "\ecdc";
	}
	
	.icon-slack:before {
	  content: "\eddc";
	}
	
	.icon-daserste:before {
	  content: "\ebdd";
	}
	
	.icon-leetcode:before {
	  content: "\ecdd";
	}
	
	.icon-slashdot:before {
	  content: "\eddd";
	}
	
	.icon-dart:before {
	  content: "\ebde";
	}
	
	.icon-launchpad:before {
	  content: "\ecde";
	}
	
	.icon-slickpic:before {
	  content: "\edde";
	}
	
	.icon-dashlane:before {
	  content: "\ebdf";
	}
	
	.icon-letterboxd:before {
	  content: "\ecdf";
	}
	
	.icon-slides:before {
	  content: "\eddf";
	}
	
	.icon-dassaultsystemes:before {
	  content: "\ebe0";
	}
	
	.icon-latex:before {
	  content: "\ece0";
	}
	
	.icon-smashingmagazine:before {
	  content: "\ede0";
	}
	
	.icon-datacamp:before {
	  content: "\ebe1";
	}
	
	.icon-letsencrypt:before {
	  content: "\ece1";
	}
	
	.icon-snapcraft:before {
	  content: "\ede1";
	}
	
	.icon-dblp:before {
	  content: "\ebe2";
	}
	
	.icon-lgtm:before {
	  content: "\ece2";
	}
	
	.icon-snyk:before {
	  content: "\ede2";
	}
	
	.icon-dazn:before {
	  content: "\ebe3";
	}
	
	.icon-liberapay:before {
	  content: "\ece3";
	}
	
	.icon-society6:before {
	  content: "\ede3";
	}
	
	.icon-debian:before {
	  content: "\ebe4";
	}
	
	.icon-librarything:before {
	  content: "\ece4";
	}
	
	.icon-sogou:before {
	  content: "\ede4";
	}
	
	.icon-deepin:before {
	  content: "\ebe5";
	}
	
	.icon-line:before {
	  content: "\ece5";
	}
	
	.icon-socket-dot-io:before {
	  content: "\ede5";
	}
	
	.icon-delicious:before {
	  content: "\ebe6";
	}
	
	.icon-linkedin:before {
	  content: "\ece6";
	}
	
	.icon-snapchat:before {
	  content: "\ede6";
	}
	
	.icon-deezer:before {
	  content: "\ebe7";
	}
	
	.icon-linewebtoon:before {
	  content: "\ece7";
	}
	
	.icon-solus:before {
	  content: "\ede7";
	}
	
	.icon-css3:before {
	  content: "\ebe8";
	}
	
	.icon-linuxfoundation:before {
	  content: "\ece8";
	}
	
	.icon-sonarqube:before {
	  content: "\ede8";
	}
	
	.icon-composer:before {
	  content: "\ebe9";
	}
	
	.icon-linux:before {
	  content: "\ece9";
	}
	
	.icon-sonarsource:before {
	  content: "\ede9";
	}
	
	.icon-designernews:before {
	  content: "\ebea";
	}
	
	.icon-linuxmint:before {
	  content: "\ecea";
	}
	
	.icon-songkick:before {
	  content: "\edea";
	}
	
	.icon-deviantart:before {
	  content: "\ebeb";
	}
	
	.icon-livejournal:before {
	  content: "\eceb";
	}
	
	.icon-sonos:before {
	  content: "\edeb";
	}
	
	.icon-dev-dot-to:before {
	  content: "\ebec";
	}
	
	.icon-livestream:before {
	  content: "\ecec";
	}
	
	.icon-soundcloud:before {
	  content: "\edec";
	}
	
	.icon-digg:before {
	  content: "\ebed";
	}
	
	.icon-logstash:before {
	  content: "\eced";
	}
	
	.icon-sourcegraph:before {
	  content: "\eded";
	}
	
	.icon-dell:before {
	  content: "\ebee";
	}
	
	.icon-loop:before {
	  content: "\ecee";
	}
	
	.icon-spacemacs:before {
	  content: "\edee";
	}
	
	.icon-dependabot:before {
	  content: "\ebef";
	}
	
	.icon-lufthansa:before {
	  content: "\ecef";
	}
	
	.icon-spacex:before {
	  content: "\edef";
	}
	
	.icon-devrant:before {
	  content: "\ebf0";
	}
	
	.icon-lua:before {
	  content: "\ecf0";
	}
	
	.icon-sparkfun:before {
	  content: "\edf0";
	}
	
	.icon-diaspora:before {
	  content: "\ebf1";
	}
	
	.icon-lumen:before {
	  content: "\ecf1";
	}
	
	.icon-sparkpost:before {
	  content: "\edf1";
	}
	
	.icon-digitalocean:before {
	  content: "\ebf2";
	}
	
	.icon-macys:before {
	  content: "\ecf2";
	}
	
	.icon-spdx:before {
	  content: "\edf2";
	}
	
	.icon-directus:before {
	  content: "\ebf3";
	}
	
	.icon-lyft:before {
	  content: "\ecf3";
	}
	
	.icon-speakerdeck:before {
	  content: "\edf3";
	}
	
	.icon-discord:before {
	  content: "\ebf4";
	}
	
	.icon-magento:before {
	  content: "\ecf4";
	}
	
	.icon-spotify:before {
	  content: "\edf4";
	}
	
	.icon-discover:before {
	  content: "\ebf5";
	}
	
	.icon-magisk:before {
	  content: "\ecf5";
	}
	
	.icon-spreaker:before {
	  content: "\edf5";
	}
	
	.icon-discourse:before {
	  content: "\ebf6";
	}
	
	.icon-mail-dot-ru:before {
	  content: "\ecf6";
	}
	
	.icon-spotlight:before {
	  content: "\edf6";
	}
	
	.icon-disqus:before {
	  content: "\ebf7";
	}
	
	.icon-makerbot:before {
	  content: "\ecf7";
	}
	
	.icon-sprint:before {
	  content: "\edf7";
	}
	
	.icon-deno:before {
	  content: "\ebf8";
	}
	
	.icon-mailchimp:before {
	  content: "\ecf8";
	}
	
	.icon-squareenix:before {
	  content: "\edf8";
	}
	
	.icon-django:before {
	  content: "\ebf9";
	}
	
	.icon-mapbox:before {
	  content: "\ecf9";
	}
	
	.icon-squarespace:before {
	  content: "\edf9";
	}
	
	.icon-dlna:before {
	  content: "\ebfa";
	}
	
	.icon-manjaro:before {
	  content: "\ecfa";
	}
	
	.icon-stackbit:before {
	  content: "\edfa";
	}
	
	.icon-disroot:before {
	  content: "\ebfb";
	}
	
	.icon-markdown:before {
	  content: "\ecfb";
	}
	
	.icon-stackexchange:before {
	  content: "\edfb";
	}
	
	.icon-docker:before {
	  content: "\ebfc";
	}
	
	.icon-marketo:before {
	  content: "\ecfc";
	}
	
	.icon-stackoverflow:before {
	  content: "\edfc";
	}
	
	.icon-docusign:before {
	  content: "\ebfd";
	}
	
	.icon-mastercard:before {
	  content: "\ecfd";
	}
	
	.icon-stackpath:before {
	  content: "\edfd";
	}
	
	.icon-dolby:before {
	  content: "\ebfe";
	}
	
	.icon-material-ui:before {
	  content: "\ecfe";
	}
	
	.icon-stackshare:before {
	  content: "\edfe";
	}
	
	.icon-dot-net:before {
	  content: "\ebff";
	}
	
	.icon-mastodon:before {
	  content: "\ecff";
	}
	
	.icon-stadia:before {
	  content: "\edff";
	}
	
	.icon-dribbble:before {
	  content: "\ec00";
	}
	
	.icon-materialdesign:before {
	  content: "\ed00";
	}
	
	.icon-statamic:before {
	  content: "\ee00";
	}
	
	.icon-draugiem-dot-lv:before {
	  content: "\ec01";
	}
	
	.icon-materialdesignicons:before {
	  content: "\ed01";
	}
	
	.icon-statuspage:before {
	  content: "\ee01";
	}
	
	.icon-dropbox:before {
	  content: "\ec02";
	}
	
	.icon-mathworks:before {
	  content: "\ed02";
	}
	
	.icon-staticman:before {
	  content: "\ee02";
	}
	
	.icon-drone:before {
	  content: "\ec03";
	}
	
	.icon-matrix:before {
	  content: "\ed03";
	}
	
	.icon-steam:before {
	  content: "\ee03";
	}
	
	.icon-drupal:before {
	  content: "\ec04";
	}
	
	.icon-mattermost:before {
	  content: "\ed04";
	}
	
	.icon-steem:before {
	  content: "\ee04";
	}
	
	.icon-dtube:before {
	  content: "\ec05";
	}
	
	.icon-mcafee:before {
	  content: "\ed05";
	}
	
	.icon-steemit:before {
	  content: "\ee05";
	}
	
	.icon-duckduckgo:before {
	  content: "\ec06";
	}
	
	.icon-matternet:before {
	  content: "\ed06";
	}
	
	.icon-steinberg:before {
	  content: "\ee06";
	}
	
	.icon-ea:before {
	  content: "\ec07";
	}
	
	.icon-mediafire:before {
	  content: "\ed07";
	}
	
	.icon-stitcher:before {
	  content: "\ee07";
	}
	
	.icon-dynatrace:before {
	  content: "\ec08";
	}
	
	.icon-mediatemple:before {
	  content: "\ed08";
	}
	
	.icon-stencyl:before {
	  content: "\ee08";
	}
	
	.icon-elastic:before {
	  content: "\ec09";
	}
	
	.icon-medium:before {
	  content: "\ed09";
	}
	
	.icon-storify:before {
	  content: "\ee09";
	}
	
	.icon-eclipseide:before {
	  content: "\ec0a";
	}
	
	.icon-mega:before {
	  content: "\ed0a";
	}
	
	.icon-storybook:before {
	  content: "\ee0a";
	}
	
	.icon-ebay:before {
	  content: "\ec0b";
	}
	
	.icon-mercedes:before {
	  content: "\ed0b";
	}
	
	.icon-strava:before {
	  content: "\ee0b";
	}
	
	.icon-elasticcloud:before {
	  content: "\ec0c";
	}
	
	.icon-messenger:before {
	  content: "\ed0c";
	}
	
	.icon-stripe:before {
	  content: "\ee0c";
	}
	
	.icon-elasticstack:before {
	  content: "\ec0d";
	}
	
	.icon-meteor:before {
	  content: "\ed0d";
	}
	
	.icon-stubhub:before {
	  content: "\ee0d";
	}
	
	.icon-elasticsearch:before {
	  content: "\ec0e";
	}
	
	.icon-micro-dot-blog:before {
	  content: "\ed0e";
	}
	
	.icon-styleshare:before {
	  content: "\ee0e";
	}
	
	.icon-elementary:before {
	  content: "\ec0f";
	}
	
	.icon-microgenetics:before {
	  content: "\ed0f";
	}
	
	.icon-stylus:before {
	  content: "\ee0f";
	}
	
	.icon-electron:before {
	  content: "\ec10";
	}
	
	.icon-microsoft:before {
	  content: "\ed10";
	}
	
	.icon-sublimetext:before {
	  content: "\ee10";
	}
	
	.icon-ello:before {
	  content: "\ec11";
	}
	
	.icon-microsoftazure:before {
	  content: "\ed11";
	}
	
	.icon-subversion:before {
	  content: "\ee11";
	}
	
	.icon-eleventy:before {
	  content: "\ec12";
	}
	
	.icon-microsoftaccess:before {
	  content: "\ed12";
	}
	
	.icon-superuser:before {
	  content: "\ee12";
	}
	
	@font-face {
	  font-family: 'iconfont';  /* Project id 2226161 */
	  src: url('//at.alicdn.com/t/font_2226161_p6oc8or96z.woff2?t=1639626103930') format('woff2'),
	       url('//at.alicdn.com/t/font_2226161_p6oc8or96z.woff?t=1639626103930') format('woff'),
	       url('//at.alicdn.com/t/font_2226161_p6oc8or96z.ttf?t=1639626103930') format('truetype');
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-juejin:before
	{
		content: "\e604";
	}
	
	.icon-touzi:before
	{
		content: "\e750";
	}
	
	.icon-wechat:before
	{
		content: "\e61d";
	}
	
	.icon-douyin:before {
	  content: "\e659";
	}
	
	.icon-creativefill:before {
	  content: "\e718";
	}
	
	.icon-creative:before {
	  content: "\e639";
	}
	
	.icon-bilibili-fill:before {
	  content: "\e9d5";
	}
	
	.icon-a-userset-line:before {
	  content: "\ea3c";
	}
	
	.icon-a-userset-fill:before {
	  content: "\ea3d";
	}
	
	.icon-plus-square:before {
	  content: "\e7b4";
	}
	
	.icon-piechart-circle-fil:before {
	  content: "\e8b4";
	}
	
	.icon-insertrowbelow:before {
	  content: "\e9b4";
	}
	
	.icon-right-square:before {
	  content: "\e7b5";
	}
	
	.icon-dashboard-fill:before {
	  content: "\e8b5";
	}
	
	.icon-insertrowabove:before {
	  content: "\e9b5";
	}
	
	.icon-project:before {
	  content: "\e7b6";
	}
	
	.icon-message-fill:before {
	  content: "\e8b6";
	}
	
	.icon-table1:before {
	  content: "\e9b6";
	}
	
	.icon-wallet:before {
	  content: "\e7b7";
	}
	
	.icon-check-square-fill:before {
	  content: "\e8b7";
	}
	
	.icon-solit-cells:before {
	  content: "\e9b7";
	}
	
	.icon-up-square:before {
	  content: "\e7b8";
	}
	
	.icon-down-square-fill:before {
	  content: "\e8b8";
	}
	
	.icon-formatpainter:before {
	  content: "\e9b8";
	}
	
	.icon-calculator:before {
	  content: "\e7b9";
	}
	
	.icon-minus-square-fill:before {
	  content: "\e8b9";
	}
	
	.icon-insertrowright:before {
	  content: "\e9b9";
	}
	
	.icon-interation:before {
	  content: "\e7ba";
	}
	
	.icon-close-square-fill:before {
	  content: "\e8ba";
	}
	
	.icon-formatpainter-fill:before {
	  content: "\e9ba";
	}
	
	.icon-check-square:before {
	  content: "\e7bb";
	}
	
	.icon-codelibrary-fill:before {
	  content: "\e8bb";
	}
	
	.icon-insertrowleft:before {
	  content: "\e9bb";
	}
	
	.icon-border:before {
	  content: "\e7bc";
	}
	
	.icon-left-square-fill:before {
	  content: "\e8bc";
	}
	
	.icon-translate:before {
	  content: "\e9bc";
	}
	
	.icon-border-outer:before {
	  content: "\e7bd";
	}
	
	.icon-play-square-fill:before {
	  content: "\e8bd";
	}
	
	.icon-deleterow:before {
	  content: "\e9bd";
	}
	
	.icon-border-top:before {
	  content: "\e7be";
	}
	
	.icon-up-square-fill:before {
	  content: "\e8be";
	}
	
	.icon-sisternode:before {
	  content: "\e9be";
	}
	
	.icon-border-bottom:before {
	  content: "\e7bf";
	}
	
	.icon-right-square-fill:before {
	  content: "\e8bf";
	}
	
	.icon-Field-number:before {
	  content: "\e9bf";
	}
	
	.icon-border-left:before {
	  content: "\e7c0";
	}
	
	.icon-plus-square-fill:before {
	  content: "\e8c0";
	}
	
	.icon-Field-String:before {
	  content: "\e9c0";
	}
	
	.icon-border-right:before {
	  content: "\e7c1";
	}
	
	.icon-accountbook-fill:before {
	  content: "\e8c1";
	}
	
	.icon-Function:before {
	  content: "\e9c1";
	}
	
	.icon-border-inner:before {
	  content: "\e7c2";
	}
	
	.icon-carryout-fill:before {
	  content: "\e8c2";
	}
	
	.icon-Field-time:before {
	  content: "\e9c2";
	}
	
	.icon-border-verticle:before {
	  content: "\e7c3";
	}
	
	.icon-calendar-fill:before {
	  content: "\e8c3";
	}
	
	.icon-GIF:before {
	  content: "\e9c3";
	}
	
	.icon-border-horizontal:before {
	  content: "\e7c4";
	}
	
	.icon-calculator-fill:before {
	  content: "\e8c4";
	}
	
	.icon-Partition:before {
	  content: "\e9c4";
	}
	
	.icon-radius-bottomleft:before {
	  content: "\e7c5";
	}
	
	.icon-interation-fill:before {
	  content: "\e8c5";
	}
	
	.icon-index:before {
	  content: "\e9c5";
	}
	
	.icon-radius-bottomright:before {
	  content: "\e7c6";
	}
	
	.icon-project-fill:before {
	  content: "\e8c6";
	}
	
	.icon-Storedprocedure:before {
	  content: "\e9c6";
	}
	
	.icon-radius-upleft:before {
	  content: "\e7c7";
	}
	
	.icon-detail-fill:before {
	  content: "\e8c7";
	}
	
	.icon-Field-Binary:before {
	  content: "\e9c7";
	}
	
	.icon-radius-upright:before {
	  content: "\e7c8";
	}
	
	.icon-save-fill:before {
	  content: "\e8c8";
	}
	
	.icon-Console-SQL:before {
	  content: "\e9c8";
	}
	
	.icon-radius-setting:before {
	  content: "\e7c9";
	}
	
	.icon-wallet-fill:before {
	  content: "\e8c9";
	}
	
	.icon-icon-test:before {
	  content: "\e9c9";
	}
	
	.icon-adduser:before {
	  content: "\e7ca";
	}
	
	.icon-control-fill:before {
	  content: "\e8ca";
	}
	
	.icon-aim:before {
	  content: "\e9ca";
	}
	
	.icon-deleteteam:before {
	  content: "\e7cb";
	}
	
	.icon-layout-fill:before {
	  content: "\e8cb";
	}
	
	.icon-compress:before {
	  content: "\e9cb";
	}
	
	.icon-deleteuser:before {
	  content: "\e7cc";
	}
	
	.icon-appstore-fill:before {
	  content: "\e8cc";
	}
	
	.icon-expend:before {
	  content: "\e9cc";
	}
	
	.icon-addteam:before {
	  content: "\e7cd";
	}
	
	.icon-mobile-fill:before {
	  content: "\e8cd";
	}
	
	.icon-folder-view:before {
	  content: "\e9cd";
	}
	
	.icon-user:before {
	  content: "\e7ce";
	}
	
	.icon-tablet-fill:before {
	  content: "\e8ce";
	}
	
	.icon-file-GIF:before {
	  content: "\e9ce";
	}
	
	.icon-team:before {
	  content: "\e7cf";
	}
	
	.icon-book-fill:before {
	  content: "\e8cf";
	}
	
	.icon-group:before {
	  content: "\e9cf";
	}
	
	.icon-areachart:before {
	  content: "\e7d0";
	}
	
	.icon-redenvelope-fill:before {
	  content: "\e8d0";
	}
	
	.icon-send:before {
	  content: "\e9d0";
	}
	
	.icon-linechart:before {
	  content: "\e7d1";
	}
	
	.icon-safetycertificate-f:before {
	  content: "\e8d1";
	}
	
	.icon-Report:before {
	  content: "\e9d1";
	}
	
	.icon-barchart:before {
	  content: "\e7d2";
	}
	
	.icon-propertysafety-fill:before {
	  content: "\e8d2";
	}
	
	.icon-View:before {
	  content: "\e9d2";
	}
	
	.icon-pointmap:before {
	  content: "\e7d3";
	}
	
	.icon-insurance-fill:before {
	  content: "\e8d3";
	}
	
	.icon-shortcut:before {
	  content: "\e9d3";
	}
	
	.icon-container:before {
	  content: "\e7d4";
	}
	
	.icon-securityscan-fill:before {
	  content: "\e8d4";
	}
	
	.icon-ungroup:before {
	  content: "\e9d4";
	}
	
	.icon-database:before {
	  content: "\e7d5";
	}
	
	.icon-file-exclamation-fil:before {
	  content: "\e8d5";
	}
	
	.icon-sever:before {
	  content: "\e7d6";
	}
	
	.icon-file-add-fill:before {
	  content: "\e8d6";
	}
	
	.icon-mobile:before {
	  content: "\e7d7";
	}
	
	.icon-file-fill:before {
	  content: "\e8d7";
	}
	
	.icon-tablet:before {
	  content: "\e7d8";
	}
	
	.icon-file-excel-fill:before {
	  content: "\e8d8";
	}
	
	.icon-redenvelope:before {
	  content: "\e7d9";
	}
	
	.icon-file-markdown-fill:before {
	  content: "\e8d9";
	}
	
	.icon-book:before {
	  content: "\e7da";
	}
	
	.icon-file-text-fill:before {
	  content: "\e8da";
	}
	
	.icon-filedone:before {
	  content: "\e7db";
	}
	
	.icon-file-ppt-fill:before {
	  content: "\e8db";
	}
	
	.icon-reconciliation:before {
	  content: "\e7dc";
	}
	
	.icon-file-unknown-fill:before {
	  content: "\e8dc";
	}
	
	.icon-file-exception:before {
	  content: "\e7dd";
	}
	
	.icon-file-word-fill:before {
	  content: "\e8dd";
	}
	
	.icon-filesync:before {
	  content: "\e7de";
	}
	
	.icon-file-zip-fill:before {
	  content: "\e8de";
	}
	
	.icon-filesearch:before {
	  content: "\e7df";
	}
	
	.icon-file-pdf-fill:before {
	  content: "\e8df";
	}
	
	.icon-solution:before {
	  content: "\e7e0";
	}
	
	.icon-file-image-fill:before {
	  content: "\e8e0";
	}
	
	.icon-fileprotect:before {
	  content: "\e7e1";
	}
	
	.icon-diff-fill:before {
	  content: "\e8e1";
	}
	
	.icon-file-add:before {
	  content: "\e7e2";
	}
	
	.icon-file-copy-fill:before {
	  content: "\e8e2";
	}
	
	.icon-file-excel:before {
	  content: "\e7e3";
	}
	
	.icon-snippets-fill:before {
	  content: "\e8e3";
	}
	
	.icon-file-exclamation:before {
	  content: "\e7e4";
	}
	
	.icon-batchfolding-fill:before {
	  content: "\e8e4";
	}
	
	.icon-file-pdf:before {
	  content: "\e7e5";
	}
	
	.icon-reconciliation-fill:before {
	  content: "\e8e5";
	}
	
	.icon-file-image:before {
	  content: "\e7e6";
	}
	
	.icon-folder-add-fill:before {
	  content: "\e8e6";
	}
	
	.icon-file-markdown:before {
	  content: "\e7e7";
	}
	
	.icon-folder-fill:before {
	  content: "\e8e7";
	}
	
	.icon-file-unknown:before {
	  content: "\e7e8";
	}
	
	.icon-folder-open-fill:before {
	  content: "\e8e8";
	}
	
	.icon-file-ppt:before {
	  content: "\e7e9";
	}
	
	.icon-database-fill:before {
	  content: "\e8e9";
	}
	
	.icon-file-word:before {
	  content: "\e7ea";
	}
	
	.icon-container-fill:before {
	  content: "\e8ea";
	}
	
	.icon-file:before {
	  content: "\e7eb";
	}
	
	.icon-sever-fill:before {
	  content: "\e8eb";
	}
	
	.icon-file-zip:before {
	  content: "\e7ec";
	}
	
	.icon-calendar-check-fill:before {
	  content: "\e8ec";
	}
	
	.icon-file-text:before {
	  content: "\e7ed";
	}
	
	.icon-image-fill:before {
	  content: "\e8ed";
	}
	
	.icon-file-copy:before {
	  content: "\e7ee";
	}
	
	.icon-idcard-fill:before {
	  content: "\e8ee";
	}
	
	.icon-snippets:before {
	  content: "\e7ef";
	}
	
	.icon-creditcard-fill:before {
	  content: "\e8ef";
	}
	
	.icon-audit:before {
	  content: "\e7f0";
	}
	
	.icon-fund-fill:before {
	  content: "\e8f0";
	}
	
	.icon-diff:before {
	  content: "\e7f1";
	}
	
	.icon-read-fill:before {
	  content: "\e8f1";
	}
	
	.icon-Batchfolding:before {
	  content: "\e7f2";
	}
	
	.icon-contacts-fill:before {
	  content: "\e8f2";
	}
	
	.icon-securityscan:before {
	  content: "\e7f3";
	}
	
	.icon-delete-fill:before {
	  content: "\e8f3";
	}
	
	.icon-propertysafety:before {
	  content: "\e7f4";
	}
	
	.icon-notification-fill:before {
	  content: "\e8f4";
	}
	
	.icon-safetycertificate:before {
	  content: "\e7f5";
	}
	
	.icon-flag-fill:before {
	  content: "\e8f5";
	}
	
	.icon-insurance:before {
	  content: "\e7f6";
	}
	
	.icon-moneycollect-fill:before {
	  content: "\e8f6";
	}
	
	.icon-alert:before {
	  content: "\e7f7";
	}
	
	.icon-medicinebox-fill:before {
	  content: "\e8f7";
	}
	
	.icon-delete:before {
	  content: "\e7f8";
	}
	
	.icon-rest-fill:before {
	  content: "\e8f8";
	}
	
	.icon-hourglass:before {
	  content: "\e7f9";
	}
	
	.icon-shopping-fill:before {
	  content: "\e8f9";
	}
	
	.icon-bulb:before {
	  content: "\e7fa";
	}
	
	.icon-skin-fill:before {
	  content: "\e8fa";
	}
	
	.icon-experiment:before {
	  content: "\e7fb";
	}
	
	.icon-video-fill:before {
	  content: "\e8fb";
	}
	
	.icon-bell:before {
	  content: "\e7fc";
	}
	
	.icon-sound-fill:before {
	  content: "\e8fc";
	}
	
	.icon-trophy:before {
	  content: "\e7fd";
	}
	
	.icon-bulb-fill:before {
	  content: "\e8fd";
	}
	
	.icon-rest:before {
	  content: "\e7fe";
	}
	
	.icon-bell-fill:before {
	  content: "\e8fe";
	}
	
	.icon-USB:before {
	  content: "\e7ff";
	}
	
	.icon-filter-fill:before {
	  content: "\e8ff";
	}
	
	.icon-skin:before {
	  content: "\e800";
	}
	
	.icon-fire-fill:before {
	  content: "\e900";
	}
	
	.icon-home:before {
	  content: "\e801";
	}
	
	.icon-funnelplot-fill:before {
	  content: "\e901";
	}
	
	.icon-bank:before {
	  content: "\e802";
	}
	
	.icon-gift-fill:before {
	  content: "\e902";
	}
	
	.icon-filter:before {
	  content: "\e803";
	}
	
	.icon-hourglass-fill:before {
	  content: "\e903";
	}
	
	.icon-funnelplot:before {
	  content: "\e804";
	}
	
	.icon-home-fill:before {
	  content: "\e904";
	}
	
	.icon-like:before {
	  content: "\e805";
	}
	
	.icon-trophy-fill:before {
	  content: "\e905";
	}
	
	.icon-unlike:before {
	  content: "\e806";
	}
	
	.icon-location-fill:before {
	  content: "\e906";
	}
	
	.icon-unlock:before {
	  content: "\e807";
	}
	
	.icon-cloud-fill:before {
	  content: "\e907";
	}
	
	.icon-lock:before {
	  content: "\e808";
	}
	
	.icon-customerservice-fill:before {
	  content: "\e908";
	}
	
	.icon-customerservice:before {
	  content: "\e809";
	}
	
	.icon-experiment-fill:before {
	  content: "\e909";
	}
	
	.icon-flag:before {
	  content: "\e80a";
	}
	
	.icon-eye-fill:before {
	  content: "\e90a";
	}
	
	.icon-moneycollect:before {
	  content: "\e80b";
	}
	
	.icon-like-fill:before {
	  content: "\e90b";
	}
	
	.icon-medicinebox:before {
	  content: "\e80c";
	}
	
	.icon-lock-fill:before {
	  content: "\e90c";
	}
	
	.icon-shop:before {
	  content: "\e80d";
	}
	
	.icon-unlike-fill:before {
	  content: "\e90d";
	}
	
	.icon-rocket:before {
	  content: "\e80e";
	}
	
	.icon-star-fill:before {
	  content: "\e90e";
	}
	
	.icon-shopping:before {
	  content: "\e80f";
	}
	
	.icon-unlock-fill:before {
	  content: "\e90f";
	}
	
	.icon-folder:before {
	  content: "\e810";
	}
	
	.icon-alert-fill:before {
	  content: "\e910";
	}
	
	.icon-folder-open:before {
	  content: "\e811";
	}
	
	.icon-api-fill:before {
	  content: "\e911";
	}
	
	.icon-folder-add:before {
	  content: "\e812";
	}
	
	.icon-highlight-fill:before {
	  content: "\e912";
	}
	
	.icon-deploymentunit:before {
	  content: "\e813";
	}
	
	.icon-phone-fill:before {
	  content: "\e913";
	}
	
	.icon-accountbook:before {
	  content: "\e814";
	}
	
	.icon-edit-fill:before {
	  content: "\e914";
	}
	
	.icon-contacts:before {
	  content: "\e815";
	}
	
	.icon-pushpin-fill:before {
	  content: "\e915";
	}
	
	.icon-carryout:before {
	  content: "\e816";
	}
	
	.icon-rocket-fill:before {
	  content: "\e916";
	}
	
	.icon-calendar-check:before {
	  content: "\e817";
	}
	
	.icon-thunderbolt-fill:before {
	  content: "\e917";
	}
	
	.icon-calendar:before {
	  content: "\e818";
	}
	
	.icon-tag-fill:before {
	  content: "\e918";
	}
	
	.icon-scan:before {
	  content: "\e819";
	}
	
	.icon-wrench-fill:before {
	  content: "\e919";
	}
	
	.icon-select:before {
	  content: "\e81a";
	}
	
	.icon-tags-fill:before {
	  content: "\e91a";
	}
	
	.icon-boxplot:before {
	  content: "\e81b";
	}
	
	.icon-bank-fill:before {
	  content: "\e91b";
	}
	
	.icon-build:before {
	  content: "\e81c";
	}
	
	.icon-camera-fill:before {
	  content: "\e91c";
	}
	
	.icon-sliders:before {
	  content: "\e81d";
	}
	
	.icon-error-fill:before {
	  content: "\e91d";
	}
	
	.icon-laptop:before {
	  content: "\e81e";
	}
	
	.icon-crown-fill:before {
	  content: "\e91e";
	}
	
	.icon-barcode:before {
	  content: "\e81f";
	}
	
	.icon-mail-fill:before {
	  content: "\e91f";
	}
	
	.icon-camera:before {
	  content: "\e820";
	}
	
	.icon-car-fill:before {
	  content: "\e920";
	}
	
	.icon-cluster:before {
	  content: "\e821";
	}
	
	.icon-printer-fill:before {
	  content: "\e921";
	}
	
	.icon-gateway:before {
	  content: "\e822";
	}
	
	.icon-shop-fill:before {
	  content: "\e922";
	}
	
	.icon-car:before {
	  content: "\e823";
	}
	
	.icon-setting-fill:before {
	  content: "\e923";
	}
	
	.icon-printer:before {
	  content: "\e824";
	}
	
	.icon-USB-fill:before {
	  content: "\e924";
	}
	
	.icon-read:before {
	  content: "\e825";
	}
	
	.icon-golden-fill:before {
	  content: "\e925";
	}
	
	.icon-cloud-server:before {
	  content: "\e826";
	}
	
	.icon-build-fill:before {
	  content: "\e926";
	}
	
	.icon-cloud-upload:before {
	  content: "\e827";
	}
	
	.icon-boxplot-fill:before {
	  content: "\e927";
	}
	
	.icon-cloud:before {
	  content: "\e828";
	}
	
	.icon-sliders-fill:before {
	  content: "\e928";
	}
	
	.icon-cloud-download:before {
	  content: "\e829";
	}
	
	.icon-alibaba:before {
	  content: "\e929";
	}
	
	.icon-cloud-sync:before {
	  content: "\e82a";
	}
	
	.icon-alibabacloud:before {
	  content: "\e92a";
	}
	
	.icon-video:before {
	  content: "\e82b";
	}
	
	.icon-antdesign:before {
	  content: "\e92b";
	}
	
	.icon-notification:before {
	  content: "\e82c";
	}
	
	.icon-ant-cloud:before {
	  content: "\e92c";
	}
	
	.icon-sound:before {
	  content: "\e82d";
	}
	
	.icon-behance:before {
	  content: "\e92d";
	}
	
	.icon-radarchart:before {
	  content: "\e82e";
	}
	
	.icon-googleplus:before {
	  content: "\e92e";
	}
	
	.icon-qrcode:before {
	  content: "\e82f";
	}
	
	.icon-medium:before {
	  content: "\e92f";
	}
	
	.icon-fund:before {
	  content: "\e830";
	}
	
	.icon-google:before {
	  content: "\e930";
	}
	
	.icon-image:before {
	  content: "\e831";
	}
	
	.icon-IE:before {
	  content: "\e931";
	}
	
	.icon-mail:before {
	  content: "\e832";
	}
	
	.icon-amazon:before {
	  content: "\e932";
	}
	
	.icon-table:before {
	  content: "\e833";
	}
	
	.icon-slack:before {
	  content: "\e933";
	}
	
	.icon-idcard:before {
	  content: "\e834";
	}
	
	.icon-alipay:before {
	  content: "\e934";
	}
	
	.icon-creditcard:before {
	  content: "\e835";
	}
	
	.icon-taobao:before {
	  content: "\e935";
	}
	
	.icon-heart:before {
	  content: "\e836";
	}
	
	.icon-zhihu:before {
	  content: "\e936";
	}
	
	.icon-block:before {
	  content: "\e837";
	}
	
	.icon-HTML:before {
	  content: "\e937";
	}
	
	.icon-error:before {
	  content: "\e838";
	}
	
	.icon-linkedin:before {
	  content: "\e938";
	}
	
	.icon-star:before {
	  content: "\e839";
	}
	
	.icon-yahoo:before {
	  content: "\e939";
	}
	
	.icon-gold:before {
	  content: "\e83a";
	}
	
	.icon-facebook:before {
	  content: "\e93a";
	}
	
	.icon-heatmap:before {
	  content: "\e83b";
	}
	
	.icon-skype:before {
	  content: "\e93b";
	}
	
	.icon-wifi:before {
	  content: "\e83c";
	}
	
	.icon-CodeSandbox:before {
	  content: "\e93c";
	}
	
	.icon-attachment:before {
	  content: "\e83d";
	}
	
	.icon-chrome:before {
	  content: "\e93d";
	}
	
	.icon-edit:before {
	  content: "\e83e";
	}
	
	.icon-codepen:before {
	  content: "\e93e";
	}
	
	.icon-key:before {
	  content: "\e83f";
	}
	
	.icon-aliwangwang:before {
	  content: "\e93f";
	}
	
	.icon-api:before {
	  content: "\e840";
	}
	
	.icon-apple:before {
	  content: "\e940";
	}
	
	.icon-disconnect:before {
	  content: "\e841";
	}
	
	.icon-android:before {
	  content: "\e941";
	}
	
	.icon-highlight:before {
	  content: "\e842";
	}
	
	.icon-sketch:before {
	  content: "\e942";
	}
	
	.icon-monitor:before {
	  content: "\e843";
	}
	
	.icon-Gitlab:before {
	  content: "\e943";
	}
	
	.icon-link:before {
	  content: "\e844";
	}
	
	.icon-dribbble:before {
	  content: "\e944";
	}
	
	.icon-man:before {
	  content: "\e845";
	}
	
	.icon-instagram:before {
	  content: "\e945";
	}
	
	.icon-percentage:before {
	  content: "\e846";
	}
	
	.icon-reddit:before {
	  content: "\e946";
	}
	
	.icon-pushpin:before {
	  content: "\e847";
	}
	
	.icon-windows:before {
	  content: "\e947";
	}
	
	.icon-phone:before {
	  content: "\e848";
	}
	
	.icon-yuque:before {
	  content: "\e948";
	}
	
	.icon-shake:before {
	  content: "\e849";
	}
	
	.icon-Youtube:before {
	  content: "\e949";
	}
	
	.icon-tag:before {
	  content: "\e84a";
	}
	
	.icon-Gitlab-fill:before {
	  content: "\e94a";
	}
	
	.icon-wrench:before {
	  content: "\e84b";
	}
	
	.icon-dropbox:before {
	  content: "\e94b";
	}
	
	.icon-tags:before {
	  content: "\e84c";
	}
	
	.icon-dingtalk:before {
	  content: "\e94c";
	}
	
	.icon-scissor:before {
	  content: "\e84d";
	}
	
	.icon-android-fill:before {
	  content: "\e94d";
	}
	
	.icon-mr:before {
	  content: "\e84e";
	}
	
	.icon-apple-fill:before {
	  content: "\e94e";
	}
	
	.icon-share:before {
	  content: "\e84f";
	}
	
	.icon-HTML-fill:before {
	  content: "\e94f";
	}
	
	.icon-branches:before {
	  content: "\e850";
	}
	
	.icon-windows-fill:before {
	  content: "\e950";
	}
	
	.icon-fork:before {
	  content: "\e851";
	}
	
	.icon-QQ:before {
	  content: "\e951";
	}
	
	.icon-shrink:before {
	  content: "\e852";
	}
	
	.icon-twitter:before {
	  content: "\e952";
	}
	
	.icon-arrawsalt:before {
	  content: "\e853";
	}
	
	.icon-skype-fill:before {
	  content: "\e953";
	}
	
	.icon-verticalright:before {
	  content: "\e854";
	}
	
	.icon-weibo:before {
	  content: "\e954";
	}
	
	.icon-verticalleft:before {
	  content: "\e855";
	}
	
	.icon-yuque-fill:before {
	  content: "\e955";
	}
	
	.icon-right:before {
	  content: "\e856";
	}
	
	.icon-Youtube-fill:before {
	  content: "\e956";
	}
	
	.icon-left:before {
	  content: "\e857";
	}
	
	.icon-yahoo-fill:before {
	  content: "\e957";
	}
	
	.icon-up:before {
	  content: "\e858";
	}
	
	.icon-wechat-fill:before {
	  content: "\e958";
	}
	
	.icon-down:before {
	  content: "\e859";
	}
	
	.icon-chrome-fill:before {
	  content: "\e959";
	}
	
	.icon-fullscreen:before {
	  content: "\e85a";
	}
	
	.icon-alipay-circle-fill:before {
	  content: "\e95a";
	}
	
	.icon-fullscreen-exit:before {
	  content: "\e85b";
	}
	
	.icon-aliwangwang-fill:before {
	  content: "\e95b";
	}
	
	.icon-doubleleft:before {
	  content: "\e85c";
	}
	
	.icon-behance-circle-fill:before {
	  content: "\e95c";
	}
	
	.icon-doubleright:before {
	  content: "\e85d";
	}
	
	.icon-amazon-circle-fill:before {
	  content: "\e95d";
	}
	
	.icon-arrowright:before {
	  content: "\e85e";
	}
	
	.icon-codepen-circle-fill:before {
	  content: "\e95e";
	}
	
	.icon-arrowup:before {
	  content: "\e85f";
	}
	
	.icon-CodeSandbox-circle-f:before {
	  content: "\e95f";
	}
	
	.icon-arrowleft:before {
	  content: "\e860";
	}
	
	.icon-dropbox-circle-fill:before {
	  content: "\e960";
	}
	
	.icon-arrowdown:before {
	  content: "\e861";
	}
	
	.icon-github-fill:before {
	  content: "\e961";
	}
	
	.icon-upload:before {
	  content: "\e862";
	}
	
	.icon-dribbble-circle-fill:before {
	  content: "\e962";
	}
	
	.icon-colum-height:before {
	  content: "\e863";
	}
	
	.icon-googleplus-circle-f:before {
	  content: "\e963";
	}
	
	.icon-vertical-align-botto:before {
	  content: "\e864";
	}
	
	.icon-medium-circle-fill:before {
	  content: "\e964";
	}
	
	.icon-vertical-align-middl:before {
	  content: "\e865";
	}
	
	.icon-QQ-circle-fill:before {
	  content: "\e965";
	}
	
	.icon-totop:before {
	  content: "\e866";
	}
	
	.icon-IE-circle-fill:before {
	  content: "\e966";
	}
	
	.icon-vertical-align-top:before {
	  content: "\e867";
	}
	
	.icon-google-circle-fill:before {
	  content: "\e967";
	}
	
	.icon-download:before {
	  content: "\e868";
	}
	
	.icon-dingtalk-circle-fill:before {
	  content: "\e968";
	}
	
	.icon-sort-descending:before {
	  content: "\e869";
	}
	
	.icon-sketch-circle-fill:before {
	  content: "\e969";
	}
	
	.icon-sort-ascending:before {
	  content: "\e86a";
	}
	
	.icon-slack-circle-fill:before {
	  content: "\e96a";
	}
	
	.icon-fall:before {
	  content: "\e86b";
	}
	
	.icon-twitter-circle-fill:before {
	  content: "\e96b";
	}
	
	.icon-swap:before {
	  content: "\e86c";
	}
	
	.icon-taobao-circle-fill:before {
	  content: "\e96c";
	}
	
	.icon-stock:before {
	  content: "\e86d";
	}
	
	.icon-weibo-circle-fill:before {
	  content: "\e96d";
	}
	
	.icon-rise:before {
	  content: "\e86e";
	}
	
	.icon-zhihu-circle-fill:before {
	  content: "\e96e";
	}
	
	.icon-indent:before {
	  content: "\e86f";
	}
	
	.icon-reddit-circle-fill:before {
	  content: "\e96f";
	}
	
	.icon-outdent:before {
	  content: "\e870";
	}
	
	.icon-alipay-square-fill:before {
	  content: "\e970";
	}
	
	.icon-menu:before {
	  content: "\e871";
	}
	
	.icon-dingtalk-square-fill:before {
	  content: "\e971";
	}
	
	.icon-unorderedlist:before {
	  content: "\e872";
	}
	
	.icon-CodeSandbox-square-f:before {
	  content: "\e972";
	}
	
	.icon-orderedlist:before {
	  content: "\e873";
	}
	
	.icon-behance-square-fill:before {
	  content: "\e973";
	}
	
	.icon-align-right:before {
	  content: "\e874";
	}
	
	.icon-amazon-square-fill:before {
	  content: "\e974";
	}
	
	.icon-align-center:before {
	  content: "\e875";
	}
	
	.icon-codepen-square-fill:before {
	  content: "\e975";
	}
	
	.icon-align-left:before {
	  content: "\e876";
	}
	
	.icon-dribbble-square-fill:before {
	  content: "\e976";
	}
	
	.icon-pic-center:before {
	  content: "\e877";
	}
	
	.icon-dropbox-square-fill:before {
	  content: "\e977";
	}
	
	.icon-pic-right:before {
	  content: "\e878";
	}
	
	.icon-facebook-fill:before {
	  content: "\e978";
	}
	
	.icon-pic-left:before {
	  content: "\e879";
	}
	
	.icon-googleplus-square-f:before {
	  content: "\e979";
	}
	
	.icon-bold:before {
	  content: "\e87a";
	}
	
	.icon-google-square-fill:before {
	  content: "\e97a";
	}
	
	.icon-font-colors:before {
	  content: "\e87b";
	}
	
	.icon-instagram-fill:before {
	  content: "\e97b";
	}
	
	.icon-exclaimination:before {
	  content: "\e87c";
	}
	
	.icon-IE-square-fill:before {
	  content: "\e97c";
	}
	
	.icon-check-circle:before {
	  content: "\e77d";
	}
	
	.icon-font-size:before {
	  content: "\e87d";
	}
	
	.icon-medium-square-fill:before {
	  content: "\e97d";
	}
	
	.icon-CI:before {
	  content: "\e77e";
	}
	
	.icon-infomation:before {
	  content: "\e87e";
	}
	
	.icon-linkedin-fill:before {
	  content: "\e97e";
	}
	
	.icon-Dollar:before {
	  content: "\e77f";
	}
	
	.icon-line-height:before {
	  content: "\e87f";
	}
	
	.icon-QQ-square-fill:before {
	  content: "\e97f";
	}
	
	.icon-compass:before {
	  content: "\e780";
	}
	
	.icon-strikethrough:before {
	  content: "\e880";
	}
	
	.icon-reddit-square-fill:before {
	  content: "\e980";
	}
	
	.icon-close-circle:before {
	  content: "\e781";
	}
	
	.icon-underline:before {
	  content: "\e881";
	}
	
	.icon-twitter-square-fill:before {
	  content: "\e981";
	}
	
	.icon-frown:before {
	  content: "\e782";
	}
	
	.icon-number:before {
	  content: "\e882";
	}
	
	.icon-sketch-square-fill:before {
	  content: "\e982";
	}
	
	.icon-info-circle:before {
	  content: "\e783";
	}
	
	.icon-italic:before {
	  content: "\e883";
	}
	
	.icon-slack-square-fill:before {
	  content: "\e983";
	}
	
	.icon-left-circle:before {
	  content: "\e784";
	}
	
	.icon-code:before {
	  content: "\e884";
	}
	
	.icon-taobao-square-fill:before {
	  content: "\e984";
	}
	
	.icon-down-circle:before {
	  content: "\e785";
	}
	
	.icon-column-width:before {
	  content: "\e885";
	}
	
	.icon-weibo-square-fill:before {
	  content: "\e985";
	}
	
	.icon-EURO:before {
	  content: "\e786";
	}
	
	.icon-check:before {
	  content: "\e886";
	}
	
	.icon-zhihu-square-fill:before {
	  content: "\e986";
	}
	
	.icon-copyright:before {
	  content: "\e787";
	}
	
	.icon-ellipsis:before {
	  content: "\e887";
	}
	
	.icon-zoomout:before {
	  content: "\e987";
	}
	
	.icon-minus-circle:before {
	  content: "\e788";
	}
	
	.icon-dash:before {
	  content: "\e888";
	}
	
	.icon-apartment:before {
	  content: "\e988";
	}
	
	.icon-meh:before {
	  content: "\e789";
	}
	
	.icon-close:before {
	  content: "\e889";
	}
	
	.icon-audio:before {
	  content: "\e989";
	}
	
	.icon-plus-circle:before {
	  content: "\e78a";
	}
	
	.icon-enter:before {
	  content: "\e88a";
	}
	
	.icon-audio-fill:before {
	  content: "\e98a";
	}
	
	.icon-play-circle:before {
	  content: "\e78b";
	}
	
	.icon-line:before {
	  content: "\e88b";
	}
	
	.icon-robot:before {
	  content: "\e98b";
	}
	
	.icon-question-circle:before {
	  content: "\e78c";
	}
	
	.icon-minus:before {
	  content: "\e88c";
	}
	
	.icon-zoomin:before {
	  content: "\e98c";
	}
	
	.icon-Pound:before {
	  content: "\e78d";
	}
	
	.icon-question:before {
	  content: "\e88d";
	}
	
	.icon-robot-fill:before {
	  content: "\e98d";
	}
	
	.icon-right-circle:before {
	  content: "\e78e";
	}
	
	.icon-rollback:before {
	  content: "\e88e";
	}
	
	.icon-bug-fill:before {
	  content: "\e98e";
	}
	
	.icon-smile:before {
	  content: "\e78f";
	}
	
	.icon-small-dash:before {
	  content: "\e88f";
	}
	
	.icon-bug:before {
	  content: "\e98f";
	}
	
	.icon-trademark:before {
	  content: "\e790";
	}
	
	.icon-pause:before {
	  content: "\e890";
	}
	
	.icon-audiostatic:before {
	  content: "\e990";
	}
	
	.icon-time-circle:before {
	  content: "\e791";
	}
	
	.icon-bg-colors:before {
	  content: "\e891";
	}
	
	.icon-comment:before {
	  content: "\e991";
	}
	
	.icon-timeout:before {
	  content: "\e792";
	}
	
	.icon-crown:before {
	  content: "\e892";
	}
	
	.icon-signal-fill:before {
	  content: "\e992";
	}
	
	.icon-earth:before {
	  content: "\e793";
	}
	
	.icon-drag:before {
	  content: "\e893";
	}
	
	.icon-verified:before {
	  content: "\e993";
	}
	
	.icon-YUAN:before {
	  content: "\e794";
	}
	
	.icon-desktop:before {
	  content: "\e894";
	}
	
	.icon-shortcut-fill:before {
	  content: "\e994";
	}
	
	.icon-up-circle:before {
	  content: "\e795";
	}
	
	.icon-gift:before {
	  content: "\e895";
	}
	
	.icon-videocameraadd:before {
	  content: "\e995";
	}
	
	.icon-warning-circle:before {
	  content: "\e796";
	}
	
	.icon-stop:before {
	  content: "\e896";
	}
	
	.icon-switchuser:before {
	  content: "\e996";
	}
	
	.icon-sync:before {
	  content: "\e797";
	}
	
	.icon-fire:before {
	  content: "\e897";
	}
	
	.icon-whatsapp:before {
	  content: "\e997";
	}
	
	.icon-transaction:before {
	  content: "\e798";
	}
	
	.icon-thunderbolt:before {
	  content: "\e898";
	}
	
	.icon-appstoreadd:before {
	  content: "\e998";
	}
	
	.icon-undo:before {
	  content: "\e799";
	}
	
	.icon-check-circle-fill:before {
	  content: "\e899";
	}
	
	.icon-caret-down:before {
	  content: "\e999";
	}
	
	.icon-redo:before {
	  content: "\e79a";
	}
	
	.icon-left-circle-fill:before {
	  content: "\e89a";
	}
	
	.icon-backward:before {
	  content: "\e99a";
	}
	
	.icon-reload:before {
	  content: "\e79b";
	}
	
	.icon-down-circle-fill:before {
	  content: "\e89b";
	}
	
	.icon-caret-up:before {
	  content: "\e99b";
	}
	
	.icon-reloadtime:before {
	  content: "\e79c";
	}
	
	.icon-minus-circle-fill:before {
	  content: "\e89c";
	}
	
	.icon-caret-right:before {
	  content: "\e99c";
	}
	
	.icon-message:before {
	  content: "\e79d";
	}
	
	.icon-close-circle-fill:before {
	  content: "\e89d";
	}
	
	.icon-caret-left:before {
	  content: "\e99d";
	}
	
	.icon-dashboard:before {
	  content: "\e79e";
	}
	
	.icon-info-circle-fill:before {
	  content: "\e89e";
	}
	
	.icon-fast-backward:before {
	  content: "\e99e";
	}
	
	.icon-issuesclose:before {
	  content: "\e79f";
	}
	
	.icon-up-circle-fill:before {
	  content: "\e89f";
	}
	
	.icon-forward:before {
	  content: "\e99f";
	}
	
	.icon-poweroff:before {
	  content: "\e7a0";
	}
	
	.icon-right-circle-fill:before {
	  content: "\e8a0";
	}
	
	.icon-fast-forward:before {
	  content: "\e9a0";
	}
	
	.icon-logout:before {
	  content: "\e7a1";
	}
	
	.icon-plus-circle-fill:before {
	  content: "\e8a1";
	}
	
	.icon-search:before {
	  content: "\e9a1";
	}
	
	.icon-piechart:before {
	  content: "\e7a2";
	}
	
	.icon-question-circle-fill:before {
	  content: "\e8a2";
	}
	
	.icon-retweet:before {
	  content: "\e9a2";
	}
	
	.icon-setting:before {
	  content: "\e7a3";
	}
	
	.icon-EURO-circle-fill:before {
	  content: "\e8a3";
	}
	
	.icon-login:before {
	  content: "\e9a3";
	}
	
	.icon-eye:before {
	  content: "\e7a4";
	}
	
	.icon-frown-fill:before {
	  content: "\e8a4";
	}
	
	.icon-step-backward:before {
	  content: "\e9a4";
	}
	
	.icon-location:before {
	  content: "\e7a5";
	}
	
	.icon-copyright-circle-fil:before {
	  content: "\e8a5";
	}
	
	.icon-step-forward:before {
	  content: "\e9a5";
	}
	
	.icon-edit-square:before {
	  content: "\e7a6";
	}
	
	.icon-CI-circle-fill:before {
	  content: "\e8a6";
	}
	
	.icon-swap-right:before {
	  content: "\e9a6";
	}
	
	.icon-export:before {
	  content: "\e7a7";
	}
	
	.icon-compass-fill:before {
	  content: "\e8a7";
	}
	
	.icon-swap-left:before {
	  content: "\e9a7";
	}
	
	.icon-save:before {
	  content: "\e7a8";
	}
	
	.icon-Dollar-circle-fill:before {
	  content: "\e8a8";
	}
	
	.icon-woman:before {
	  content: "\e9a8";
	}
	
	.icon-Import:before {
	  content: "\e7a9";
	}
	
	.icon-poweroff-circle-fill:before {
	  content: "\e8a9";
	}
	
	.icon-plus:before {
	  content: "\e9a9";
	}
	
	.icon-appstore:before {
	  content: "\e7aa";
	}
	
	.icon-meh-fill:before {
	  content: "\e8aa";
	}
	
	.icon-eyeclose-fill:before {
	  content: "\e9aa";
	}
	
	.icon-close-square:before {
	  content: "\e7ab";
	}
	
	.icon-play-circle-fill:before {
	  content: "\e8ab";
	}
	
	.icon-eye-close:before {
	  content: "\e9ab";
	}
	
	.icon-down-square:before {
	  content: "\e7ac";
	}
	
	.icon-Pound-circle-fill:before {
	  content: "\e8ac";
	}
	
	.icon-clear:before {
	  content: "\e9ac";
	}
	
	.icon-layout:before {
	  content: "\e7ad";
	}
	
	.icon-smile-fill:before {
	  content: "\e8ad";
	}
	
	.icon-collapse:before {
	  content: "\e9ad";
	}
	
	.icon-left-square:before {
	  content: "\e7ae";
	}
	
	.icon-stop-fill:before {
	  content: "\e8ae";
	}
	
	.icon-expand:before {
	  content: "\e9ae";
	}
	
	.icon-play-square:before {
	  content: "\e7af";
	}
	
	.icon-warning-circle-fill:before {
	  content: "\e8af";
	}
	
	.icon-deletecolumn:before {
	  content: "\e9af";
	}
	
	.icon-control:before {
	  content: "\e7b0";
	}
	
	.icon-time-circle-fill:before {
	  content: "\e8b0";
	}
	
	.icon-merge-cells:before {
	  content: "\e9b0";
	}
	
	.icon-codelibrary:before {
	  content: "\e7b1";
	}
	
	.icon-trademark-circle-fil:before {
	  content: "\e8b1";
	}
	
	.icon-subnode:before {
	  content: "\e9b1";
	}
	
	.icon-detail:before {
	  content: "\e7b2";
	}
	
	.icon-YUAN-circle-fill:before {
	  content: "\e8b2";
	}
	
	.icon-rotate-left:before {
	  content: "\e9b2";
	}
	
	.icon-minus-square:before {
	  content: "\e7b3";
	}
	
	.icon-heart-fill:before {
	  content: "\e8b3";
	}
	
	.icon-rotate-right:before {
	  content: "\e9b3";
	}
</style>
