Udemy ReactJS Course MS - NextJS 

374. Adding First Pages
-u pages folderu kreiramo fajl news.js


375. Adding Nested Paths & Pages (Nested Routes)


376. Creating Dynamic Pages (with Parameters)
-u news folderu, kreiramo [newsId].js fajl


377. Extracting Dynamic Parameter Values
-importujemo React hook useRouter
-kreiramo varijablu const router


378. Linking Between Pages
-u news/index.js fajl importujemo Link komponentu


379. Onwards to a bigger Project!


380. Preparing the Project Pages
-kreiramo new-meetup folder
-u new-meetup folderu kreiramo index.js fajl
-kreiramo [meetupId] folder
-unutar ovog foldera kreiramo index.js fajl


381. Outputting a List of Meetups
-u glavni index.js fajl, importujemo MeetupList komponentu
-komponenti MeetupList dodajemo props
-kreiramo niz DUMMY_MEETUPS unutar kojeg se nalazi vise objekata


382. The "_app.js" File & Layout Wrapper
-u komponentu MainNavigation komponentu importujemo komponentu Link
-u _app.js fajl importujemo komponentu Layout


383. Using Programmatic (Imperative) Navigation
-u komponenti MeetupItem kreiramo funkciju showDetailsHandler()
-elementu button dodajemo onClick dogadaj i proslijedujemo mu funkciju showDetailsHandler() 
-u komponenti MeetupItem importujemo React hook useRouter
-kreiramo varijablu const router
-u funkciji showDetailsHandler() varijabli router dodajemo metodu push


384. Adding Custom Components & CSS Modules
-kreiramo komponentu MeetupDetail sa parametrom props
-u [meetupId]/index.js fajl importujemo komponentu MeetupDetail 
-kreiramo MeetupDetail.module.css fajl


386. How Pre-rendering Works & Which Problem We Face


387. Data Fetching for Static Pages
-u pages folderu,u glavnom index.js fajlu, kreiramo asinhronu funckiju getStaticProps()
-u return izjavi kreiramo objekt
-u tom objektu nalazi se objekt props
-komponenti MeetupList u meetups prop dodajemo props.meetups


388. More on Static Site Generation (SSG)
-kucamo komandu npm run build u terminalu
-u return objekt dodajemo revalidate


389. Expoloring Server-side Rendering (SSR) with "getServerSideProps"
-kreiramo asinhronu funkciju getServerSideProps()
-kreiramo varijable request i response
-u return izjavi dodajemo objekt
-unutar tog objekta dodajemo props


390. Working with Params for SSG Data Fetching
-u [meetupId]/index.js fajlu kreiramo funkciju getStatiProps sa parametrom context
-u return izjavi kreiramo objekt
-unutar tog objekta kreiramo objekt props
-kreiramo varijablu const meetupId


391. Preparing Paths with "getStaticPaths" & Working With Fallback Pages
-u[meetupId]/index.js fajlu kreiramo asinhronu funkciju getStaticPaths()
-dodajemo fallback: false


392. Introducing API Routes
-u pages folderu kreiramo folder api
-u api folderu kreiramo new-meetup.js fajl
-u new-meetup.js fajlu kreiramo funkciju handler sa parametrima request i response
-dodajemo uslov if
-u uslovu if dodajemo varijable 


393. Working with MongoDB
-u terminalu instaliramo mongo paket npm i mongodb
-funkciji handler dodajemo async
-kreiramo varijable client i db
-kreiramo varijablu const meetupsCollection
-kreiramo varijablu const result
-varijabli client dodajemo metodu close()
-varijabli response dodajemo metodu status()


394. Sending Http Requests To Our API Routes
-u [new-meetup]/index.js fajlu funkciji addMeetupHandler() dodajemo async
-u funkciji addMeetupHandler() kreiramo varijablu const response
-kreiramo varijablu const data
-importujemo React hook useRouter
-kreiramo varijablu const router


395. Getting Data From the Database
-u pages folderu, u glavnom index.js fajl importujemo MongoClient
-u funkciju getStaticProps() dodajemo MongoClient.connect()
-u funkciji getStaticProps() kreiramo varijable
-u return izjave, unutar props objekta, meetups varijabli dodajemo metodu map()


396. Getting Meetup Details Data & Preparing Pages
-u [meetupId]/index.js fajl importujemo MongoClient
-u funkciji getStaticPaths() kreiramo varijable
-u funkciji getStaticProps() kreiramo varijable
-u return izjavi, u objekt props dodajemo meetupData: selectedMeetup
-funkciji MeetupDetails() dodajemo parametar props
-komponenti MeetupDetail dodajemo props vrijednosti
-importujemo ObjectId
-u metodi findOne(), unutar objekta, id-u dodajemo new ObjectId


397. Adding "head" Metadata
-u pages folderu, unutar index.js fajla importujemo komponentu Head
-u new-meetup folderu, unutar index.js fajla importujemo komponentu Head
-u [meetupId]/index.js fajl importujemo komponentu Head

