# --------- Dependencies layer --------------
FROM mcr.microsoft.com/dotnet/sdk:7.0-bullseye-slim AS build

RUN mkdir /buildroot /artifacts
WORKDIR /buildroot
COPY ./data/price-db/seed-app/SeedApp ./data/price-db/seed-app/SeedApp
COPY ./src/price-api/PriceApi ./src/price-api/PriceApi

RUN dotnet restore ./data/price-db/seed-app/SeedApp/SeedApp.csproj
RUN dotnet publish --no-restore ./data/price-db/seed-app/SeedApp/SeedApp.csproj -o "/artifacts" -c release

# --------- Runtime layer --------------
FROM mcr.microsoft.com/dotnet/aspnet:7.0-bullseye-slim AS runtime
LABEL maintainer="Sohan Fernando"

WORKDIR /app
ENV DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=false

COPY --from=build /artifacts/ ./

ENTRYPOINT ["dotnet", "SeedApp.dll"]
