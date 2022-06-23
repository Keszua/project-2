FROM node:18.3
WORKDIR /app

COPY package.json .

RUN npm install

COPY . ./

CMD ["node", "app.js"]



# zbudowanie obrazu 
# docker image build -t megak:e2d25 .
# docker image build -t 60284356/megak:e2d25 .

# reczne odpalenie na porcie 9000
# docker run -d -p 9000:3000 --name megaKv1 megak:e2d25


# otagowanie obrazu 
# docker image tag megak:e2d25 602841356/megak:e2d25

# wypchniecie obrazu na zewnętrzne repo
# docker push 602841356/megak:e2d25