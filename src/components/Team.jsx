import React from "react";
import samatImg from "../assets/hero/samat.jpg"; // Update with real image paths
import tolegenImg from "../assets/hero/tolegen.jpg";

const Team = () => {
  return (
    <section id="team" className="py-12 bg-n-7 text-center">
      <h2 className="h2 mb-8 text-color-1">Руководство компании</h2>

      <div className="flex flex-col sm:flex-row justify-center gap-8 px-4 max-w-4xl mx-auto">
        {/* Samat */}
        <div className="bg-n-8 border border-n-6 p-4 rounded-2xl w-full sm:w-1/2">
          <img
            src={samatImg}
            alt="Samat Berikbol"
            className="w-20 h-20 mx-auto mb-3 rounded-full object-cover"
          />
          <h3 className="text-base font-semibold text-n-1">Самат Берикбол</h3>
          <p className="text-sm text-n-3 mb-2">Генеральный директор</p>
          <div className="text-xs text-n-3 space-y-1">
            <p>
              📞{" "}
              <a
                href="tel:+77072377070"
                className="hover:underline text-color-1"
              >
                +7 (707) 237-7070
              </a>
            </p>
            <p>
              📧{" "}
              <a
                href="mailto:berikbol.samat.21@mail.ru"
                className="hover:underline text-color-1"
              >
                berikbol.samat.21@mail.ru
              </a>
            </p>
            <p>
              📸{" "}
              <a
                href="https://instagram.com/samat_berikbol"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-color-1"
              >
                @samat_trd
              </a>
            </p>
          </div>
        </div>

        {/* Tolegen */}
        <div className="bg-n-8 border border-n-6 p-4 rounded-2xl w-full sm:w-1/2">
          <img
            src={tolegenImg}
            alt="Tolegen Yerzhan"
            className="w-20 h-20 mx-auto mb-3 rounded-full object-cover"
          />
          <h3 className="text-base font-semibold text-n-1">Толеген Ержан</h3>
          <p className="text-sm text-n-3 mb-2">Исполнительный директор</p>
          <div className="text-xs text-n-3 space-y-1">
            <p>
              📞{" "}
              <a
                href="tel:+77477871077"
                className="hover:underline text-color-1"
              >
                +7 (747) 787-1077
              </a>
            </p>
            <p>
              📧{" "}
              <a
                href="mailto:Yerzhan351@gmail.com"
                className="hover:underline text-color-1"
              >
                Yerzhan351@gmail.com
              </a>
            </p>
            <p>
              📸{" "}
              <a
                href="https://www.instagram.com/tolegen_construct?igsh=MW1zMGhuZW1hMXJudQ%3D%3D&utm_source=qr "
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-color-1"
              >
                @tolegen_construct
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
