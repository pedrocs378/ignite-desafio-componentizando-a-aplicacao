import { GenreResponseProps } from '../App'

import { Button } from "./Button";

interface SidebarProps {
  genres: GenreResponseProps[]
  selectedGenreId: number
  onClickButton: (id: number) => void
}

export function SideBar({ genres, selectedGenreId, onClickButton }: SidebarProps) {

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}