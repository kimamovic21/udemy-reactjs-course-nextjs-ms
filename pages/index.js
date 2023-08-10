import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://meetbosnia.com/storage/2022/04/What-to-see-in-Sarajevo.jpg',
        address: '71000 Sarajevo',
        description: 'This is a first meetup!',
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Mostar_Old_Town_Panorama_2007.jpg',
        address: '88000 Mostar',
        description: 'This is a second meetup!',
    },
];

const HomePage = () => {
    return (
        <MeetupList meetups={DUMMY_MEETUPS}/>
   );
};

export default HomePage;