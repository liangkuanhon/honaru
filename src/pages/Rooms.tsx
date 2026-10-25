import { Screen } from '../components/ui'
import { rooms, roomsPage } from '../content'

/** Each Room on its own screen, washed in its colour: who it is for, the feeling, the place. */
export function Rooms() {
  return (
    <>
      <Screen>
        <p className="overline">{roomsPage.label}</p>
        <h1 className="hero__tagline">{roomsPage.title}</h1>
      </Screen>

      {rooms.map((room) => (
        <Screen key={room.id} room={room.id}>
          <p className="overline">{room.audience}</p>
          <h2 className="title">{room.title}</h2>
          <p className="lead room-mood">{room.mood}</p>
          <p className="lead">{room.text}</p>
        </Screen>
      ))}
    </>
  )
}
