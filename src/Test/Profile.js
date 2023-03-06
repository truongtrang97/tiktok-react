import { useParams } from 'react-router-dom';

function Profile() {
    const { name1, name2 } = useParams();
    // const name1 = 'abc';
    // const name2 = 'abe';
    console.log('param: ', name1);

    return (
        <div>
            <h1>Profile of {name1 || name2}</h1>
        </div>
    );
}

export default Profile;
