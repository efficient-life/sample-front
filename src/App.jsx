import React from "react";
import axios from "axios";

function App() {
	const [data, setData] = React.useState();
	const [data2, setData2] = React.useState();
	const url = "https://tranquil-chamber-13279.herokuapp.com/";
        const url2 = "https://api.github.com/users/efficient-life/repos";


	const GetData = () => {
		axios.get(url).then((res) => {
			setData(res.data);
		});
		axios.get(url2).then((res) => {
			setData2(res.data);
		});
	};
	return (
		<div>
			<div>ここに処理を書いていきます</div>
			{data ? <div>{data.Hello}</div> : <button onClick={GetData}>データを取得</button>}
                        {data2}
		</div>
	);
}

export default App;
