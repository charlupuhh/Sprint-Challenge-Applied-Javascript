// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

function topicCreator(){
    axios.get('https://lambda-times-backend.herokuapp.com/topics')
        .then(response => {
            topics = document.querySelector('.topics');
            let topicData = response.data.topics;
            for (i in topicData){
                let topic = tabCreator(topicData[i]);
                topics.append(topic);
            }
        })
        .catch(error => {
            console.log('Something went wrong', error)
        })
        .finally(() => {
            console.log('done')
        })
}

topicCreator();

function tabCreator(info){
    let topic = document.createElement('div');
    topic.classList.add('tab');
    topic.textContent = info;

    return topic
}