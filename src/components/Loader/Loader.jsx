import { RevolvingDot } from 'react-loader-spinner'
export default function Loader(){
    return(
        <RevolvingDot
            visible={true}
            height="60"
            width="60"
            color="blue"
            ariaLabel="revolving-dot-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    )
}