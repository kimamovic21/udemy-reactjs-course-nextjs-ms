import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

const MeetupDetails = (props) => {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name='description' content={props.meetupData.description}/>
            </Head>
           <MeetupDetail 
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>
    );
};

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://imamovickerim:G5mkUZsY1CmOcOTT@cluster0.cebywgo.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

    client.close();

    return {
        fallback: false,
        paths: meetups.map(meetup => ({
            params: {
                meetupId: meetup._id.toString()
            }
        }))
        
        // [
        //     { 
        //         params: {
        //             meetupId: 'm1',
        //        },
        //     },
        //     {
        //         params: {
        //             meetupId: 'm2',
        //         },
        //     },
        // ],
    };
};

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;
    console.log(meetupId);

    const client = await MongoClient.connect('mongodb+srv://imamovickerim:G5mkUZsY1CmOcOTT@cluster0.cebywgo.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({
        _id: new ObjectId(meetupId),
    });

    client.close();

    return {
        props: {
            // meetupData: {
            //     image: 'https://meetbosnia.com/storage/2022/04/What-to-see-in-Sarajevo.jpg',
            //     id: meetupId,
            //     title: 'First Meetup',
            //     address: '71000 Sarajevo',
            //     description: 'This is a first Meetup',
            // },
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
        },
    };
};

export default MeetupDetails;