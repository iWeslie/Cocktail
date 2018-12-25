CREATE PROCEDURE spAlbumsFromArtist
    @ArtistName VARCHAR(255)
AS 
    SELECT AlbumName, ReleaseDate
    FROM Albums
        INNER JOIN Artists
        ON Albums.ArtistId = Artists.ArtistId
    WHERE Artists.ArtistName = @ArtistName;
GO