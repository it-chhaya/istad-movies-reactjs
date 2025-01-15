import { FaMinus, FaPlus } from "react-icons/fa6";
import { ButtonIcon } from "../components/AppButton";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

export default function Home() {

    const dispatch = useDispatch()

    function onIncreasement() {
        console.log('Increasement')
        dispatch(increment())
    }


    const onDecreasement = () => {
        console.log('Decreasement')
        dispatch(decrement())
    }

    return (
        <div className="px-4 py-2 grid grid-cols-2 gap-2">
            <ButtonIcon onClick={onIncreasement} icon={<FaPlus/>}/>
            <ButtonIcon onClick={onDecreasement} icon={<FaMinus/>}/>
        </div>
    )
}