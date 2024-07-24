FROM python:3.12-slim-bullseye

WORKDIR /api-server

COPY requirements.txt requirements.txt

COPY . .

RUN chmod +x script.sh

SHELL [ "/bin/bash", "-c" ]

RUN python -m venv myenv

EXPOSE 5000

CMD ["./script.sh"]