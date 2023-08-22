import ReactLoading from 'react-loading';

export default function Loading() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '.01vh'}}>
        <ReactLoading type={'cylon'} color={'#000000'} height={'2%'} width={'2%'} />
        </div>
    );
}