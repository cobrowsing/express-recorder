import {Component, h} from "preact";

const style = require('./style.scss');



type Props = {
    text: string;
    className: string;
}

type State = {

}




export class Test extends Component<Props, State>{

    render(props:Props) {
        const { text, className: classNameProp } = props;

      return <div className={style.group}><div>{text}</div><div className={style.customText}>custom text</div> </div>
    }
}