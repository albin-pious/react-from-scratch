const heading = React.createElement(
    'h1',{},"hello world"
)
const para = React.createElement('p',{id:'para',style:{color:'red'}},'This is a paragraph')
const container = React.createElement('div',{style:{backgroundColor:'blue'},className:'container'},[heading,para])
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container)