import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

const HomePage = (props) => {
    console.log(props);
   
    return (
        <Fragment>
            <Head>
                <title>NextJS Meetups</title>
                <meta name='description' content='Browse a huge list of highly active React meetups!'/>
            </Head>
            <MeetupList meetups={props.meetups}/>
        </Fragment>
   );
};

export async function getStaticProps() {
    // fetch data from an API
    const client = await MongoClient.connect('mongodb+srv://imamovickerim:G5mkUZsY1CmOcOTT@cluster0.cebywgo.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
           meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
           }))
        },
        revalidate: 1 // number of seconds nextjs will will wait until it regenerate this page for an incoming request
    };  
};

export default HomePage;