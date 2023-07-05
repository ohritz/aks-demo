# --------- Dependencies layer --------------
FROM mcr.microsoft.com/dotnet/sdk:7.0-bullseye-slim AS build

RUN mkdir /buildroot /artifacts
WORKDIR /buildroot
COPY ./price-api.sln .
COPY ./PriceApi/PriceApi.csproj ./PriceApi/PriceApi.csproj

RUN dotnet restore
COPY . .
RUN dotnet publish --no-restore ./PriceApi -o "/artifacts" -c release

# --------- Runtime layer --------------
FROM mcr.microsoft.com/dotnet/aspnet:7.0-bullseye-slim AS runtime
LABEL maintainer="Sohan Fernando"

WORKDIR /app
ENV DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=false

COPY --from=build /artifacts/ ./

ENTRYPOINT ["dotnet", "PriceApi.dll"]
