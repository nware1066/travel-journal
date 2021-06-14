import { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateEntry from './CreateEntry'


function JournalEntry(props) {

const [showForm, setShowForm] = useState(false);
// const display = () => setShowForm(true);

// function createTrip(event, index) {
//     props.addTrip(trip)
//         setTrip({
//             date: '',
//             name: '',
//             content: '',
//             pictures: [],
//             key: {index},
//             id: {index}
//         })
//         event.preventDefault();
// }

return (
    <div className="create-entry-wrapper"> 
        <button onClick={() => setShowForm(!showForm)}>edit journal</button>
        {showForm ? <CreateEntry /> : null}
        
        <div className="journal-entry">
            <div className="journal-text">
                <h1>England</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo vitae ipsa vel minima debitis voluptatum labore molestias asperiores beatae inventore!<br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum cupiditate neque quod commodi repudiandae velit repellat ea aut distinctio, harum quasi pariatur fugiat inventore officia debitis nihil aperiam, incidunt aspernatur!<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vitae sit deserunt? Fugiat quisquam non distinctio nesciunt eum, atque culpa est eveniet error odit dicta! Libero, et minus exercitationem veritatis voluptas necessitatibus vero fugit nisi!<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut voluptas, rerum delectus quaerat neque doloremque ipsum aliquid provident eius excepturi praesentium ea odit sed cum fuga ducimus laboriosam. Nemo, debitis explicabo pariatur a quae dolorem ab laborum vitae totam sapiente fugiat magni ullam veniam eos, laboriosam commodi saepe vel nihil. Eum eos reprehenderit fugiat, tempore tempora consequuntur libero, doloremque quod adipisci quidem odit temporibus labore non aperiam suscipit. Ex deserunt culpa praesentium, laudantium vero ad! Dolor impedit perspiciatis quisquam. Labore aperiam quidem architecto ea accusamus quia, optio dolor nulla autem, distinctio officia natus. Eveniet, aut laboriosam in explicabo unde totam quae labore provident tempore numquam repellat eligendi suscipit illo odit fugit ipsa? Fuga accusamus nihil, quisquam quaerat autem qui harum. Eaque ab reprehenderit unde obcaecati vel qui blanditiis, architecto, nisi, quae rem ullam ipsa adipisci laboriosam dolore voluptates doloribus modi illum quo iusto. Error doloribus earum nostrum illum maxime aliquid fuga assumenda quis explicabo ut quisquam exercitationem qui nisi aut laudantium et quidem, quasi, eius modi. Provident reiciendis facilis, placeat tempora autem hic soluta modi animi repudiandae aspernatur facere quas non, corporis dignissimos odit! Obcaecati debitis optio quam suscipit. Quidem vitae sed ullam veniam incidunt nemo fugit, nulla exercitationem minima, cupiditate voluptatibus libero, quas assumenda rem ab! Perspiciatis repellendus fuga doloremque culpa sint accusantium est neque debitis, excepturi laboriosam dolore nam eaque deleniti totam quod qui corrupti magni dolores nobis numquam? Aspernatur accusantium illo maxime nostrum mollitia exercitationem animi iure reprehenderit iusto! Repellat molestiae laborum ratione sint maxime. Fugit.</p>
            </div>
            <div className="gallery">
                <img className="image img-1" src="/Assets/Bury.jpg" alt="abby at Bury" />
                <img className="image img-2" src="/Assets/Warwick-garden.jpg" alt="peacock in the garden at Warwick Castle" />
                <img className="image img-3" src="/Assets/Warwick.jpeg" alt="Warwick castle" />   
            </div>
        </div>
        < Link to = "/" ><button > Return to Map</button></Link>
</div>
)


}

export default JournalEntry;