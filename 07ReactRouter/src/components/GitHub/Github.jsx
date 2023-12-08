
import { useLoaderData } from "react-router-dom";


const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Chandra583')
    //         .then((res) => res.json())
    //         .then(res => {
    //             setData(res)
    //             console.log(res)
    //         })

    // }, [setData])
    return (
        <div className="bg-gray-400 h-15 p-4" >
            <h1 className="text-center text-black">
                user name :{data.login}
            </h1>
            <h1 className="text-center text-white">
                {data.name} followers :{data.followers}
            </h1>
            <img src={data.avatar_url} alt="" width={300} />
        </div>
    );
}

export default Github;

export const GithubLoader = async () => {
    const result = await fetch('https://api.github.com/users/Chandra583')
    return result.json()


}



