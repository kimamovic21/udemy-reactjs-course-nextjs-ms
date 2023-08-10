import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
    return (
       <MeetupDetail 
            image='https://meetbosnia.com/storage/2022/04/What-to-see-in-Sarajevo.jpg'
            title='First Meetup'
            address='71000 Sarajevo'
            description='This is a first Meetup'
       />
    );
};

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { 
                params: {
                    meetupId: 'm1',
               },
            },
            {
                params: {
                    meetupId: 'm2',
                },
            },
        ],
    };
};

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;
    console.log(meetupId);

    return {
        props: {
            meetupData: {
                image: 'https://meetbosnia.com/storage/2022/04/What-to-see-in-Sarajevo.jpg',
                id: meetupId,
                title: 'First Meetup',
                address: '71000 Sarajevo',
                description: 'This is a first Meetup',
            },
        },
    };
};

export default MeetupDetails;