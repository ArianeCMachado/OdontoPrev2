import { getDentists, getPatients, getSchedule, getAuthDentist, getAuthPatient } from "../../lib/storage.js";
import { convertData } from "../../lib/convert.js";

const dentists = getDentists();
const schedule = getSchedule();
const patients = getPatients();

export default () => {
  const container = document.createElement("div");
  const template = `    
        <div class="appointment-container">
          <span class="dentist-info">
            <img src="./assets/icons/others/user-female.svg" alt="dentist picture">
            <p class="dentist-name">Dra. ${dentists.name}</p>
            <p class="dentist-cro">abcd1234</p>
          </span>
          <section class="schedule">
            <h1>Agenda de consultas</h1>
            <button class="confirmed-appointments">Confirmadas</button>
            <button class="pending-appointments">Pendentes</button>
            <span class="appointment-status">${schedule.status === "confirmed" ? `<p>Consultas confirmadas</p>` : `<p>Consultas pendentes</p>`}</span>
            <div class="appointment-info">
            </div>
          </section>
        </div>
      `;
  container.innerHTML = template;

  const appointmentInfo = container.querySelector(".appointment-info");
  const confirmedButton = container.querySelector(".confirmed-appointments");
  const pendingButton = container.querySelector(".pending-button");

  const printAppointment = (appointments) => {

    const appointmentTemplate = appointments.map((appointment) => {
        appointmentInfo.innerHTML += `
        <div>
          <p class="patient-name">Paciente: ${appointment.patientName}</p>
          <p class="appointment-date">Dia da consulta: ${convertData(appointment.date)}</p>
          <p class="appointment-time">Horário da consulta: ${appointment.time}:00</p>
        </div>
        `;
      })
      .join(""); 
    return appointmentTemplate;
  };

  printAppointment(schedule);

  return container;
};
