CREATE VIEW RockAlbums
AS 
SELECT AlbumName, ArtistName
FROM Albums
    INNER JOIN Artists
    ON Albums.ArtistId = Artists.ArtistId
    INNER JOIN Genres
    ON Albums.GenreId = Genres.GenreId
WHERE Genres.Genre = 'Rock'