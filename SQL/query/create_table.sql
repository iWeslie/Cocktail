USE Music;

-- Create the table in the specified schema
CREATE TABLE Artists (
    ArtistId int IDENTITY(1,1) NOT NULL PRIMARY KEY,
    ArtistName nvarchar(255) NOT NULL,
    ActiveFrom date
);
GO

CREATE TABLE Genres (
    GenreId INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    Genre nvarchar(50) NOT NULL
);

CREATE TABLE Albums (
    AlbumId int IDENTITY(1,1) NOT NULL PRIMARY KEY,
    AlbumName nvarchar(255) NOT NULL,
    ReleaseDate date NOT NULL,
    ArtistId int NOT NULL,
    GenreId int NOT NULL

   

    -- create a relationship between Albums and Artists
    CONSTRAINT FK_Albums_Artists FOREIGN KEY (ArtistId)     
        REFERENCES dbo.Artists (ArtistId)     
        ON DELETE NO ACTION    
        ON UPDATE NO ACTION   
);


-- Single Column Foreign Keys
-- ArtistId INT NOT NULL
    -- REFERENCES Artists(ArtistId)

-- Multicolumn Foreign Keys
-- CONSTRAINT FK_Albums_Artists FOREIGN KEY (ArtistId, ArtistName)
--     REFERENCES dbo.Artists (ArtistId, ArtistName)