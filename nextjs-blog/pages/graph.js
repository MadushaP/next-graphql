
import { gql } from "@apollo/client"
import client from "../lib/apollo-client"

export async function getStaticProps() {
    const { data } = await client.query({
      query: gql`
        query Countries {
          countries {
            code
            name
            emoji
          }
        }
      `,
    });

    return {
      props: {
        countries: data.countries.slice(0, 4),
      },
   }
}

export default function Graph({ countries }) {
return (<div >
  {countries.map((country) => (
    <div key={country.code}>
      <h3>{country.name}</h3>
      <p>
        {country.code} - {country.emoji}
      </p>
    </div>
  ))}
</div>)
}