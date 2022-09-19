import Profile from './components/Profile'
import Container from './components/Container'

const profile = [
  { name: 'Takashi', age: 19, country: 'Japan' },
  { name: 'Jane', age: 28, country: 'UK', color: 'red' }
]

const Example = () => {
  return (
    <div>
      <Container
        title="Childrenとは？"
        // childrenはpropsでも渡せるがkeyを付与すること
        children={[
          <Profile key={profile[0].name} {...profile[0]} />,
          <Profile key={profile[1].name} {...profile[1]} />
        ]}
      ></Container>
    </div>
  )
}

export default Example
