import { IntroContent } from './components/IntroContent'
import { CoffeeCard } from './components/CoffeeCard'
import { coffees } from './coffees-data'
import { CoffeesSection } from './styles'

export const Home = () => {
  return (
    <>
      <IntroContent />
      <CoffeesSection>
        <h2>Nossos cafés</h2>
        <div>
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              imageSource={coffee.imageSource}
              labels={coffee.labels}
              title={coffee.title}
              description={coffee.description}
              price={coffee.price}
            />
          ))}
        </div>
      </CoffeesSection>
    </>
  )
}
