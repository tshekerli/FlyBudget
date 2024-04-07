import { ReactComponent as PlaneIcon } from '../img/plane-solid.svg';

export function Head() {
  return (
    <div className="searc-head" style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
      <p>FlyBudget</p>
      <PlaneIcon height={"20px"} style={{ fill: '#1E3050' }} />
    </div>
  );
}