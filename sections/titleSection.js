import Button from '../components/button/button';

export default function TitleSection({ title, path, color, value, icon }) {
  return (
    <div className="row">
      <div className="col_12">
        <div className="border">
          <div className="mdb">
            <h1>{title}</h1>
          </div>
          <div>
            <Button link={path} color={color} title={value} icon={icon} />
          </div>
        </div>
      </div>
    </div>
  );
}
