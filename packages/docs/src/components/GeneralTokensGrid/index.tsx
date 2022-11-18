import './styles.css';

type Tokens = {
  [key: string]: string;
};

type GeneralTokensGridProps = {
  tokens: Tokens;
};

export const GeneralTokensGrid = ({ tokens }: GeneralTokensGridProps) => {
  return (
    <table className="gtg-container">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([name, value]) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
