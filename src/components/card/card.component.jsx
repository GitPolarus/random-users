import "./card.style.css";

export const Card = ({ user }) => {
  return (
    <div className="card-container">
      <img src={`https://i.pravatar.cc/180?img=${user.id}`} />
      <h2> {user.name} </h2>
      <p>{user.email}</p>
    </div>
  );
};
